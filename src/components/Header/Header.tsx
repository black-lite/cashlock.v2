import React from "react";
import classes from './Header.module.scss';
import {Subheader, SwitchState} from "../Subheader/Subheader";

interface IHeaderProps {
	bankCash : string,
	bankAccount : string,
	onChangeState: (state: SwitchState) => void,
	initSwitchState: SwitchState,
}

export const Header = ({bankCash, bankAccount, onChangeState, initSwitchState}: IHeaderProps) => {
	return (
		<div className={`${classes.header} ${classes.main}`}>
			<div className={classes.top}>
				<a className={classes.left} />
				<div>
					<div>{bankAccount}</div>
					<div>{bankCash}</div>
				</div>
				<a className={classes.right} />
			</div>
			<Subheader initSwitchState={initSwitchState} onChangeState={onChangeState}/>
		</div>
	);
};