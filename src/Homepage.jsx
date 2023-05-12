import Logo from './assets/Logo.svg';
export function Homepage() {
	return (
		<div className="flex items-center justify-center space-x-2">
			<div><img src={Logo} alt=""/></div>
			<div><h1 className="pb-8 text-center pt-8 font-bold text-[25px] text-titans ">Ecommerce</h1></div>
			{
				<div className="min-h-72">	</div>

			}
		</div>
	)
}