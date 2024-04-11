import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../@/components/ui/dialog";
import { Button } from "../../../@/components/ui/button";
import { Eye } from "lucide-react";
interface props {
  url: string;
}
const PdfViewer: React.FC<props> = ({ url }) => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  console.log(url);
  useEffect(() => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const pdfUrl: string = URL.createObjectURL(blob);
        setPdfUrl(pdfUrl);
      })
      .catch((error) => {
        console.error("Error fetching PDF:", error);
      });

    return () => {
      // Clean up the URL object to prevent memory leaks
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [url]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"outline"}>
          <Eye
            className="cursor-pointer"
            // onClick={() => {
            //   setplay(!play);
            // }}
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>PDF Content</DialogTitle>
          <DialogDescription>learn the PDF content by anyone</DialogDescription>
        </DialogHeader>
        {pdfUrl && (
          <iframe
            title="PDF Viewer"
            src={pdfUrl}
            style={{ width: "100%", height: "800px" }}
            frameBorder="0"
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PdfViewer;
