import { Button } from '@/components/ui/button'
import React from 'react'


export default function BlogsPage() {
  return (
    <div className='min-h-screen flex flex-col pt-32 container'>
      <h1 className='text-6xl text-primary my-8'>Blogs</h1>
      <BlogsList />
    </div>
  )
}

function BlogsList() {
  return (
    <section id="my-work">
      <div className="flex flex-col items-center my-8">
        <div className="work flex flex-col items-center">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  )
}

function BlogCard() {
  return (
    <div className="project my-4 flex md:flex-row flex-col gap-4 w-full items-center hover:border border-primary">
      <div className="image overflow-hidden md:w-1/3 w-full">
        <img className="rounded border-2 w-full" src={"https://picsum.photos/400"} alt="project1" />
      </div>
      <div className="content md:w-2/3 w-full text-center md:text-start">
        <h3 className="my-2 text-3xl capitalize">Blog 1</h3>
        <p className="text-foreground leading-7">
          This is a blog that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally
        </p>
        <div className="controls mt-8 flex gap-4">
          <Button variant="outline" className="text-2xl border-primary text-primary">Source</Button>
          <Button variant="outline" className="text-2xl border-primary text-primary">Preview</Button>
        </div>
      </div>
    </div>
  )
}
