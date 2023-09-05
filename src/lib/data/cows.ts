import type Cow from "$lib/models/cow.model";


const COWS: Cow[] = [
	{
		id: 1,
		name: "Cowapult",
		imageURL: "/images/cows/cowapult.png",
		description: "A cow that launches cheerios up at ducks.",
		cost: 200,
	},
	{
		id: 2,
		name: "Wheat Crop",
		imageURL: "/images/cows/wheat_crop.png",
		description: "This one isn't a cow. You can't make Cheerios without wheat!",
		cost: 100
	},
	{
		id: 3,
		name: "Cereal Bodyguard",
		imageURL: "/images/cows/cereal_box_cow.png",
		description: "A peaceful cow willing to protect the Cheerios at all costs. Has exceptional health. His dry cleaner hates him.",
		cost: 200
	},
	{
		id: 4,
		name: "Cow Cannon",
		imageURL: "/images/cows/cow_cannon.png",
		description: "Shoots rainbow cheerios that can hit multiple ducks.",
		cost: 400
	},
	{
		id: 5,
		name: "Cheerio Bomb",
		imageURL: "/images/cows/cheerio_bomb.png",
		description: "Explodes upon placement in a puff of cheeerio-goodness.",
		cost: 500
	},
	{
		id: 6,
		name: "We Cow Cows",
		imageURL: "/images/cows/stacked_cow.png",
		description: "A crowd of cows that like standing on each other.",
		cost: 175
	},
	{
		id: 7,
		name: "Chilled Cheerios",
		imageURL: "/images/cows/chilled_cereal.png",
		description: "Specially prepared cheerios that slow down ducks.",
		cost: 300,
	},
	{
		id: 8,
		name: "Spilt Cereal",
		imageURL: "/images/cows/spilt_cereal.png",
		description: "No use crying over spilt cereal. Damages ducks that step on it. Dies on contact with rubber duck.",
		cost: 200
	}
]

export default COWS;