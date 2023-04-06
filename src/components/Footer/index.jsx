import useData from '@/hooks/useData';

export default function Footer() {
  const { data, isLoading, isError } = useData('hero');
  let d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <section className='w-full h-full overflow-hidden bg-slate-700 pt-24 pb-12 px-6'>
        <div className='w-full mx-auto container'>
          {data?.map((item) => (
            <div
              key={item._id}
              className='w-full'>
              <div className='w-full flex-wrap flex items-center gap-y-4 md:gap-x-12'>
                <div>
                  <h2 className='text-white text-3xl font-semibold'>
                    {item?.title}
                  </h2>
                  <p className='text-slate-300 font-light mt-2'>
                    {item?.description}
                  </p>
                </div>
                <div>
                  <h2 className='text-white text-2xl font-normal'>
                    Hubungi Kami
                  </h2>
                  <p className='text-slate-300 mt-4 mb-1'>+{item?.telp}</p>
                  <p className='text-slate-300'>{item?.emailUI}</p>
                </div>
              </div>
              <hr className='mt-8 mb-4 border border-slate-500' />
              <p className='text-center font-light text-slate-200 text-base'>
                ShoesX {year} © . All Right Reversed
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
