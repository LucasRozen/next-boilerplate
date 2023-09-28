import Image from 'next/image';
import ButtonLink from './ButtonLink';

const ShowCard = ({ actualShow }) => {
  const { show } = actualShow;
  const { name, id, image } = show;
  return (
    <div className='show_container col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col gap-3 justify-start items-center rounded-lg shadow-lg p-4 bg-gray-100'>
      <div className='mt-2 relative w-full h-48 rounded-lg overflow-hidden'>
        <Image src={image?.original} width={680} height={1000} alt={name} objectFit='cover' className='rounded-t-lg'/>
      </div>
      <h3 className='text-2x1 font-semibold text-gray-800'>{name}</h3>
      <ButtonLink id={id} />
    </div>
  );
};

export default ShowCard;
