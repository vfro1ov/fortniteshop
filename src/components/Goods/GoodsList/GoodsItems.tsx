import { FunctionComponent } from "react";

export const GoodsItems: FunctionComponent<GoodsItemsProps> = (props) => {
	const {id,full_background,name,description,price} = props;
	
	return (
		<div>
			<div className="card" id={id}>
				<div className="card_image">
					<img src={full_background} alt={name} />
					<span>{name}</span>
				</div>
				<div className="card_content">
					<p>{description}</p>
				</div>
				<div className="card_action">
					<button>Купить</button>
					<span>{price}</span>
				</div>
			</div>
		</div>
	);
}

export interface GoodsItemsProps {
	id:string,
	full_background:string,
	name:string,
	description:string,
	price:string
}
