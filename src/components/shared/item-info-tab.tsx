import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Description } from '../ui/description'
export const ItemInfoTab = () => {
	return (
		<Tabs defaultValue='characteristics' className='w-full mt-5'>
			<TabsList className='bg-white border-2'>
				<TabsTrigger className='tab-catalog' value='characteristics'>
					характеристики
				</TabsTrigger>
				<TabsTrigger className='tab-catalog' value='description'>
					Описание
				</TabsTrigger>
			</TabsList>
			{/* Content */}
			<TabsContent value='characteristics' className='mt-5 text-[12px] uppercase '>
				<table className='w-full border-collapse'>
					<tbody>
						<tr className='border-b border-dashed border-gray-300'>
							<td className='py-2 px-4 text-left'>бренд</td>
							<td className='py-2 px-4 text-right'>Armaf</td>
						</tr>
						<tr className='border-b border-dashed border-gray-300'>
							<td className='py-2 px-4 text-left'>Пол</td>
							<td className='py-2 px-4 text-right'>Для мужчин</td>
						</tr>
						<tr className='border-b border-dashed border-gray-300'>
							<td className='py-2 px-4 text-left'>Для какого события</td>
							<td className='py-2 px-4 text-right'>Повседневный</td>
						</tr>
						<tr className='border-b border-dashed border-gray-300'>
							<td className='py-2 px-4 text-left'>Верхние ноты</td>
							<td className='py-2 px-4 text-right'>
								Черная смородина, Лимон, Бергамот, Ананас, Яблоко
							</td>
						</tr>
						<tr className='border-b border-dashed border-gray-300'>
							<td className='py-2 px-4 text-left'>Средние ноты</td>
							<td className='py-2 px-4 text-right'>Жасмин, Роза, Береза</td>
						</tr>
						<tr className='border-b border-dashed border-gray-300'>
							<td className='py-2 px-4 text-left'>Базовые ноты</td>
							<td className='py-2 px-4 text-right'>
								Амбра, Пачули, Мускус, Ваниль
							</td>
						</tr>
					</tbody>
				</table>
			</TabsContent>
			<TabsContent value='description' className='mt-5'>
				<Description
					text='`Ваш длинный текст здесь. Этот абзац должен быть достаточно длинным, чтобы проверить функциональность ограничения строк. 
  Он должен содержать более 9 строк, чтобы увидеть эффект кнопки "Показать больше". 
  Например, вы можете скопировать и вставить этот текст несколько раз, чтобы сделать его длиннее. 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
  Повторите этот текст по необходимости, чтобы он превысил 9 строк.`
'
				/>
			</TabsContent>
		</Tabs>
	)
}
