import React, { useMemo } from "react";
import { StyleSheet, View } from "react-primitives";
import * as CoinIcons from "./icons";

function formatName(name) {
	return name
		? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
		: "";
}

const CryptocurrencyIcon = ({
	size = 32,
	style,
	name,
	...props
}) => {
	const formattedName = useMemo(() => formatName(name), [name]);
	const CryptocurrencyIconElement = CoinIcons[formattedName];
	return (
			<CryptocurrencyIconElement
				name={formattedName}
				{...props}
			/>
	);
};

const arePropsEqual = (prev, next) =>
	prev.size === next.size &&
	prev.name === next.name;

export default React.memo(CryptocurrencyIcon, arePropsEqual);
