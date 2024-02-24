import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { client } from "../lib/client";
import Product from '../components/Product';
import banner from '../public/assets/banner-shop.png';

const Shop = ({ products }) => {
	const router = useRouter();
	const [category, setCategory] = useState("Todos");
	const [productsList, setProductsList] = useState(products);
	const [query, setQuery] = useState("");
	const [sort, setSort] = useState("featured");

	const categoriesList = ["Todos", "Tecnologia", "Investimento",];

	useEffect(() => {
		if (!router.isReady) return;
		const queryCategory = router.query.category;
		setCategory(queryCategory || "Todos");
	}, [router.isReady, router.query.category]);

	useEffect(() => {
		let updatedList = products;

		if (category !== "Todos") {
			updatedList = updatedList.filter(product => product.category && product.category.toLowerCase() === category.toLowerCase());
		}

		if (query) {
			updatedList = updatedList.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
		}

		switch (sort) {
			case "low to high":
				updatedList.sort((a, b) => a.price - b.price);
				break;
			case "high to low":
				updatedList.sort((a, b) => b.price - a.price);
				break;
			default:
				break;
		}

		setProductsList(updatedList);
	}, [category, query, sort, products]);

	return (
		<>
			<Image src={banner} alt="banner" height={350} />
			<div className="shop-container">
				<div className="filter-container">
					<label htmlFor="Query" className="filter-label">
						Produto
					</label>
					<input
						type="text"
						placeholder="Pesquisar Produto..."
						onChange={(e) => setQuery(e.target.value)}
						autoFocus
					/>

					<label htmlFor="Sort Products" className="filter-label">
						Preço
					</label>
					<select onChange={(e) => setSort(e.target.value)} value={sort}>
						<option value="featured">Destacado</option>
						<option value="low to high">Preço: Menor para Maior</option>
						<option value="high to low">Preço: Maior para Menor</option>
					</select>

					<label htmlFor="Category" className="filter-label">
						Categoria
					</label>
					<select onChange={(e) => setCategory(e.target.value)} value={category}>
						{categoriesList.map((cat, index) => (
							<option value={cat} key={index}>
								{cat}
							</option>
						))}
					</select>
				</div>

				<div className="products-shop">
					{productsList.map(product => (
						<Product key={product._id} product={product} />
					))}

				</div>
			</div>
		</>

	);
};

export const getServerSideProps = async () => {
	const query = '*[_type == "product"]';
	const products = await client.fetch(query);
	return {
		props: { products },
	};
};

export default Shop;
