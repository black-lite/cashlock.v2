import {ListItem} from "@/components/ListItem";

interface IMainProps {
	items: string[],
}

export const MainContent = (props: IMainProps) => {
	return (
		<ul>
			{props?.items?.map(item => <ListItem item={item}/>) ?? 'Добавьте свою первую операцию'}
		</ul>
	);
};