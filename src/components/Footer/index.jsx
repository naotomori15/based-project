export default function Footer({ data }) {
  let d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <section className='w-full h-full overflow-hidden bg-slate-700 py-24 px-6'>
        <div className='w-full mx-auto container'>
          <div className='w-full flex items-center gap-y-4 md:gap-x-12'>
            <div>
              <h2 className='text-white text-3xl font-semibold'>
                {data?.title}
              </h2>
              <p className='text-slate-300 font-light mt-2'>
                {data?.description}
              </p>
            </div>
            <div>
              <h2 className='text-white text-2xl font-normal'>Hubungi Kami</h2>
              <p className='text-slate-300 mt-4 mb-1'>+{data?.noTelp}</p>
              <p className='text-slate-300'>{data?.email}</p>
            </div>
          </div>
          <hr className='mt-8 mb-4 border border-slate-500' />
          <p className='text-center font-light text-slate-200 text-base'>
            ShoesX {year} © . All Right Reversed
          </p>
        </div>
      </section>
    </>
  );
}
