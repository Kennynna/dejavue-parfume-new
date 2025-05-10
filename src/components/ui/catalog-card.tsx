export const CatalogCard = ({
	image = 'https://cdn2.randewoo.ru/img/78655/z_w/1',
	name = 'Francis Kurkdjian',
	article = 123124,
	price = 10000,
}) => {
	return (
		<div className='border border-2-black border-opacity-50 rounded-[7px] p-2 bg-[#fff] catalog-card'>
			<img
				src={image}
				alt={name}
				height={100}
				width={130}
				className=' rounded-[7px] object-contain max-h-[120px] w-full'
			/>
			<div className='mt-2 space-y-1'>
				<p className='text-[12px] font-bold'>{price} R</p>
				<h3 className='text-[12px]  font-semibold'>{name}</h3>
				{/* <p className='text-[12px] text-gray-600'>Артикул: {article}</p> */}
        
			</div>
		</div>
	)
}
