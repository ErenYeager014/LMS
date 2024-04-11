
import { TailSpin } from "react-loader-spinner"
const Loading = () => {
    return (
        <div className='h-full w-full flex justify-center items-center'>
            <TailSpin
                visible={true}
                height="100"
                width="100"
                color="black"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Loading