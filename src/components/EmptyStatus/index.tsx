import Image from 'next/image'
import EmptyIcon from './empty.svg'
export default function EmptyStatus() {
	return (
		<div className="w-full h-80 flex justify-center items-center">
			<Image src={EmptyIcon} height={320} width={485} alt="empty" color="#fff" />
		</div>
	)
}
