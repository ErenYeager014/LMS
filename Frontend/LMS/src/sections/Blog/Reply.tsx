import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react'
import useFetch from '../../Hooks/useFetch'
import { Input } from '../../../@/components/ui/input';
import { Button } from '../../../@/components/ui/button';
import { AvatarImage, Avatar, AvatarFallback } from '../../../@/components/ui/avatar';
import { PostFn } from '../../Hooks/Post';
import toast from 'react-hot-toast';
type props = {
    id: string,
}
const Reply: React.FC<props> = ({ id }) => {
    const { iserror, isloading, data } = useFetch(`/reply/${id}`);


    const [form, setform] = useState({
        content: "",
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setform({
            content: e.target.value,
        })
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await PostFn(form, `/reply/${id}`, "post")
        if (result) {
            toast.success(" post successfully created")
        }
        else {
            toast.error("something went wrong")
        }
    }
    if (isloading) {
        return <>Loading...</>
    }
    if (iserror) {
        return <>Something went wrong</>
    }
    console.log(data)
    return (
        <div className='ml-7'>
            {
                data.data && data.data.map((item: any, index: number) => {
                    return <div key={index} className='rounded-sm my-4 shadow-sm shadow-gray-400 p-6 border-[.6px] border-gray-500'>
                        <div className='flex flex-row gap-2 items-center'>
                            <Avatar>
                                <AvatarImage src='../../assets/react.svg'></AvatarImage>
                                <AvatarFallback>{item.userId.username.slice(0, 1)}</AvatarFallback>
                            </Avatar>
                            <div>{item.userId.username}</div>
                        </div>
                        <div className='my-4 '>{item.content}</div>
                    </div>
                })
            }
            <form className='flex flex-row gap-2' onClick={handleSubmit}>
                <Input type='text' name='content' placeholder='Enter...' className='flex-[70%]' onChange={handleChange} />
                <Button type='submit' size={"sm"}>Reply</Button>
            </form>
        </div>
    )
}

export default Reply