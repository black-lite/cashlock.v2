import React from "react";
import classes from './Header.module.scss';

interface IHeaderProps {
	cls ?: string,
	text ?: string,
	children ?: React.ReactNode
}

export const Header = (props: IHeaderProps) => {
	return (
		<div className={`${classes.header} ${classes.main}`}>
			<div className={classes.top}>
				<a className={classes.left}/>
				<div>{props.text}</div>
				<a className={classes.right} onClick={() =>
					{
						fetch('/expanses').then(list =>
						{
							console.log(list);
						})
						.catch(e => console.log(e))
					}
				}/>
			</div>
			{ props.children && <div className="bottom">{props.children}</div> }
		</div>
	);
};