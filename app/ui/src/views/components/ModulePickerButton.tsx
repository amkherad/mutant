import React from "react";
import { useBoolean } from '@uifabric/react-hooks';
import { DialogType, DefaultButton, Dialog, DialogFooter, PrimaryButton, IDragOptions } from "@fluentui/react";
import { ModulePicker } from "./ModulePicker";

interface ModulePickerButtonProps {

}

const modalPropsStyles = { main: { minWidth: 650 } };
const dragOptions = {
    moveMenuItemText: 'Move',
    closeMenuItemText: 'Close'
} as IDragOptions;
const dialogContentProps = {
    type: DialogType.close,
    title: 'Module Browser',
    //subText: 'Do you want to send this message without a subject?',
};

export function ModulePickerButton(props: ModulePickerButtonProps) {
    const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
    const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);

    const modalProps = React.useMemo(
        () => ({
            styles: modalPropsStyles,
            dragOptions: isDraggable ? dragOptions : undefined,
        }),
        [isDraggable],
    );

    return (
        <div>
            <DefaultButton secondaryText="Opens the Sample Dialog" onClick={toggleHideDialog} text="Open Dialog" />
            <Dialog
                hidden={hideDialog}
                onDismiss={toggleHideDialog}
                modalProps={modalProps}
                minWidth='90%'
                dialogContentProps={dialogContentProps}
            >
                <ModulePicker
                />

                <DialogFooter>
                    <PrimaryButton onClick={toggleHideDialog} text="Save" />
                    <DefaultButton onClick={toggleHideDialog} text="Cancel" />
                </DialogFooter>
            </Dialog>
        </div>
    );
}