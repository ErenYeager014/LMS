

const CourseHeader = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold p-2'>Course Title</h1>
            <hr />
            <div className='flex flex-row gap-6 flex-wrap items-center p-4'>
                <div className='flex-[50%] max-w-[100%]'>
                    <h2 className='text-2xl my-4 font-semibold'>Description</h2>
                    <p className='text-md text-gray-400 font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa incidunt libero dicta, fugit corrupti tempora, nobis laudantium mollitia beatae natus magnam! A necessitatibus ad modi aspernatur amet corrupti, quia ipsam natus consequatur facere porro mollitia, sit excepturi inventore dolor eius omnis suscipit adipisci! Sed suscipit nemo cum assumenda nesciunt dolore sequi culpa, odio quae. Fuga impedit cumque omnis? Modi repellendus velit odit iste quae reiciendis, mollitia quidem. Molestiae sequi, magni vel quod ea sed commodi facilis! Nesciunt, architecto quae sint perspiciatis aspernatur id explicabo minima nulla inventore? Recusandae pariatur ab veniam, ullam sequi culpa minima doloribus dolores asperiores ipsam..</p>
                </div>
                <div className='max-w-[100%] mx-auto md:max-w-[500px] justify-self-end flex-[50%] '>
                    <img src='https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg' alt="*tube" className='object-contain max-w-[100%] shadow-lg shadow-gray-400 ' />
                </div>
            </div>
        </div>
    )
}

export default CourseHeader