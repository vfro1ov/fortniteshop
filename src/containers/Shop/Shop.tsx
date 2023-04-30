import { FunctionComponent, useEffect, useState } from "react";
import { API_BASE  } from "../../const/api";
import { API_KEY } from "../../const/api-key";
import { GoodsList } from "../../components/Goods/GoodsList/GoodsList";

export const Shop: FunctionComponent<ShopProps> = (props) => {
	const {} = props;
	const [goods, setGoods] = useState([])

	useEffect(()=> {
		fetch(API_BASE,{
			headers: {
				'Authorization' : API_KEY
			}
		}).then(response => response.json()).then(data => {
			setGoods(data)
		})
	})
	return (
		<div>
			<GoodsList goods={goods}/>
		</div>
	);
}

export interface ShopProps {
}
