
interface IListItemProps {
	item: string,
}

export const ListItem = (props: IListItemProps) => {
	return (
		<li>{props.item}</li>
	);
};