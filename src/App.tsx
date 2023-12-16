import { CustomRouter } from './router/CustomRouter';
import { Theme } from './theme/Theme';

export const App = (): JSX.Element => {
	return (
		<Theme>
			<CustomRouter />
		</Theme>
	);
}