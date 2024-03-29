/**
 * This code was generated by Builder.io.
 */
import Image from "next/image";
import  React from "react";

const AboutSection=() => {
  return (
    <div
      className="box-border flex relative flex-col shrink-0 p-5 w-screen min-h-[100px] ml-[calc(50%_-_50vw)]"
      
      // lazyLoad={false}
    >
      <section className="box-border flex relative flex-col grow shrink-0 self-stretch p-5 mx-auto w-full max-w-[1200px] min-h-[100px]">
        <header className="box-border relative shrink-0 mt-5 h-auto text-5xl font-semibold text-center">
          <p>Welcome to my portfolio</p>
        </header>
        <main className="box-border flex relative flex-col shrink-0 mt-5 mr-auto h-[395px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <Image
                width={2040}
                height={250}
                
                alt ="image"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets%2F8df391f3c38142b2b0ce0f8bea5faea5%2Fcdc9b11c4d604d1fba9802bed1bab062?width=4000 4000w "
                className="box-border object-cover overflow-hidden shrink-0 mx-auto mt-5 mb-3.5 shadow-sm aspect-[0.67] h-[250px] max-w-[220px] min-h-[20px] min-w-[20px] rounded-[35px] w-[30%] max-sm:w-4/5"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <header className="box-border relative shrink-0 pr-28 mt-11 h-auto text-3xl font-semibold text-center">
                <p>Sotiboldiyev Abdug'ani</p>
              </header>
              <div className="box-border relative shrink-0 mt-20 mr-20 h-auto text-center max-sm:mt-3.5 max-sm:mr-0">
                <p>
                  <span className="text-2xl">
                    {" "}
                    Hi I'm Abdug'ani, I like writing about my journey learning
                    web development. Check out some of my projects or the blog
                    for more info on them.{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default AboutSection;
