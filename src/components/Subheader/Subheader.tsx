import classes from './Subheader.module.scss';
import {useState} from "react";

interface ISubheaderProps {
	onChangeState: (state: SwitchState) => void,
	initSwitchState: SwitchState
}

export enum SwitchState { expenses = 0, revenues = 1 }

export const Subheader = ({onChangeState, initSwitchState}: ISubheaderProps) =>
{
	const [state, setState] = useState(initSwitchState);

	const btn = (switchState: SwitchState, txt: string) =>
	{
		return <a
			className={ state == switchState ? classes.act : '' }
			onClick={ () => {
				setState((prev) =>
				{
					if (prev == switchState) return prev;

					onChangeState(switchState);
					return switchState;
				});
			} }
		>{txt}</a>
	}

	return (
		<div className={classes.subheader}>
			<div>{ btn(SwitchState.expenses, 'РАСХОДЫ') }{ btn(SwitchState.revenues, 'ДОХОДЫ') }</div>
		</div>
	);
};