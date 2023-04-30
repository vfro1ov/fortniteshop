import { FunctionComponent } from "react";
import { GoodsItems } from "./GoodsItems";

export const GoodsList: FunctionComponent<GoodsListProps> = (props) => {
	const {goods} = props;
	
	return (
		<div>
			{goods && goods.map((item)=> (
				<GoodsItems key={item.id} {...item} />
			))}
		</div>
	);
}

export interface GoodsListProps {
	goods: string[]
}
