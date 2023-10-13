// Data for special input fields
export const productTypeMeta = {
	DVD: {
		label: 'Please, provide size of DVD in MB',
		inputs: [
			{
				id: 'size',
				name: 'size',
				type: 'text',
				placeholder: 'Size (MB)',
			},
		],
		errorFields: ['weight', 'height', 'width', 'length'],
	},
	book: {
		label: 'Please, provide weight of the book',
		inputs: [
			{
				id: 'weight',
				name: 'weight',
				type: 'text',
				placeholder: 'Weight (KG)',
			},
		],
		errorFields: ['size', 'height', 'width', 'length'],
	},
	furniture: {
		label: 'Please provide dimensions in HxWxL format:',
		inputs: [
			{
				id: 'height',
				name: 'height',
				type: 'text',
				placeholder: 'Height (CM)',
			},
			{
				id: 'width',
				name: 'width',
				type: 'text',
				placeholder: 'Width (CM)',
			},
			{
				id: 'length',
				name: 'length',
				type: 'text',
				placeholder: 'Length (CM)',
			},
		],
		errorFields: ['size', 'weight'],
	},
};
