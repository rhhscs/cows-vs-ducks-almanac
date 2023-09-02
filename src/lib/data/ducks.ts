export interface Duck {
	name: string;
	imageURL: string;
	description: string;
}

const DUCKS: Duck[] = [
	{
		name: "Basic Duck",
		imageURL: "images/ducks/1.png",
		description: "A basic duck that loves being a duck and hates cows with a passion."
	}
]

export default DUCKS;