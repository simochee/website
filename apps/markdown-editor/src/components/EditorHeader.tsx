import {
	VscLoading,
	VscMapVertical,
	VscMapVerticalFilled,
	VscMarkdown,
	VscMenu,
} from "react-icons/vsc";

type Props = {
	loading: boolean;
	minimap: boolean;
	onChangeMinimap: (minimap: boolean) => void;
};

export const EditorHeader: React.FC<Props> = ({
	loading,
	minimap,
	onChangeMinimap,
}) => {
	const MinimapIcon = minimap ? VscMapVerticalFilled : VscMapVertical;

	return (
		<header className="flex items-center bg-editor-commandCenter-background pr-3">
			<p className="flex h-9 items-center gap-2 border-editor-tab-activeBorderTop border-t bg-editor-tab-activeBackground pr-5 pl-4 text-editor-tab-activeForeground text-xs">
				<VscMarkdown className="text-xl" />
				article.md
				{loading && (
					<VscLoading className="size-4 animate-spin text-editor-tab-inactiveForeground" />
				)}
			</p>
			<nav className="ml-auto flex gap-1">
				<button
					type="button"
					className="grid size-6 place-items-center rounded bg-editor-commandCenter-background text-editor-commandCenter-foreground hover:bg-editor-commandCenter-activeBackground"
					onClick={() => onChangeMinimap(!minimap)}
				>
					<MinimapIcon />
				</button>
				<button
					type="button"
					className="grid size-6 place-items-center rounded bg-editor-commandCenter-background text-editor-commandCenter-foreground hover:bg-editor-commandCenter-activeBackground"
				>
					<VscMenu />
				</button>
			</nav>
		</header>
	);
};
