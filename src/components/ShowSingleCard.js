import Image from 'next/image';

const ShowSingleCard = ({ show }) => {
  return (
    <div className='bg-black text-white min-h-screen flex flex-col items-center py-8 px-4'>
      <div className="w-72 h-72 rounded-lg overflow-hidden mb-8">
        {show.image && (
          <Image
            src={show.image?.original}
            height={400}
            width={1080}
            objectFit='cover'
            alt={show.name}
          />
        )}
      </div>
      <div className='max-w-screen-lg mx-auto'>
        <h2 className='text-4xl font-semibold mb-4 text-center'>{show.name}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='px-0 flex flex-col pr-0'>
            <p className='mb-4 px-0'><strong>Género:</strong> {show.genres.join(', ')}</p>
            <p className='mb-4 px-0'><strong>Clasificación:</strong> {show.rating?.average || 'N/A'}</p>
            <p className='mb-4 px-0'><strong>Estado:</strong> {show.status}</p>
          </div>
          <div className='text-base leading-6'>
            <p dangerouslySetInnerHTML={{ __html: show.summary }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowSingleCard;
