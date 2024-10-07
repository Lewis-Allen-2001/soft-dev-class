import * as React from "react";
import * as Popover from "@radix-ui/react-popover";


const PopoverDemo = () => (
	<Popover.Root>
		<Popover.Trigger className="PopoverTrigger" >Click Here Fella!</Popover.Trigger>
		<Popover.Portal>
			<Popover.Content className="PopoverContent">
				The Game...
				<Popover.Arrow className="PopoverArrow"/>
			</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
);

export default PopoverDemo;