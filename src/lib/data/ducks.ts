import type Duck from "$lib/models/duck.model";


const DUCKS: Duck[] = [
	{
		id: 1,
		name: "Basic Duck",
		imageURL: "/images/ducks/basic_duck.png",
		description: "A basic duck that loves being a duck and hates cows with a passion.",
	},
	{
		id: 2,
		name: "Duck with (butter) Knife",
		imageURL: "/images/ducks/knife_duck.png",
		description: "Knife for decorative purposes decorative purposes only. Attack power comes from the heart."
	},
	{
		id: 3,
		name: "Pond Duck",
		imageURL: "/images/ducks/river_duck.png",
		description: "Pond life has strengthened this duck."
	},
	{
		id: 4,
		name: "Gargantuan Duck",
		imageURL: "/images/ducks/basic_duck.png",
		description: "A basic duck that grew up drinking milk and eating all their veggies."
	},
	{
		id: 5,
		name: "Rubber Duck",
		imageURL: "/images/ducks/rubber_duck.png",
		description: "Duck native to the waters of Toronto. Dies on contact with Spilt Cereal."
	}
]

export default DUCKS;