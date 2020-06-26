import React, { Component } from "react";
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';

const _items: ICommandBarItemProps[] = [
    {
        key: 'newItem',
        text: 'Pipeline',
        cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
        iconProps: { iconName: 'Add' },
        subMenuProps: {
            items: [
                {
                    key: 'newItem-add',
                    text: 'Create From Template',
                    iconProps: { iconName: 'Add' },
                    ['data-automation-id']: 'newEmailButton', // optional
                },
                {
                    key: 'newItem-pipeline', 
                    text: 'Create Empty Pipeline',
                    iconProps: { iconName: 'Calendar' },
                },
                {
                    key: 'newItem-save',
                    text: 'Save Pipeline',
                    iconProps: { iconName: 'Add' },
                },
            ],
        },
    },
    {
        key: 'library',
        text: 'Library',
        iconProps: { iconName: 'Library' },
        subMenuProps: {
            items: [
                {
                    key: 'library-all',
                    text: 'Library',
                    iconProps: { iconName: 'Calendar' },
                },
                {
                    key: 'library-local',
                    text: 'Local Library',
                    iconProps: { iconName: 'Calendar' },
                },
                {
                    key: 'library-online',
                    text: 'Online Library',
                    iconProps: { iconName: 'Calendar' },
                },
                {
                    key: 'library-community',
                    text: 'Community',
                    iconProps: { iconName: 'Mail' },
                    ['data-automation-id']: 'newEmailButton', // optional
                },
            ],
        },
    },
    // {
    //     key: 'share',
    //     text: 'Export',
    //     iconProps: { iconName: 'Share' },
    //     onClick: () => console.log('Share'),
    //     subMenuProps: {
    //         items: [
    //             {
    //                 key: 'share-all',
    //                 text: 'To JavaScript...',
    //                 iconProps: { iconName: 'Calendar' },
    //             },
    //             {
    //                 key: 'share-all',
    //                 text: 'To Python...',
    //                 iconProps: { iconName: 'Calendar' },
    //             },
    //             {
    //                 key: 'share-local',
    //                 text: 'To Bash...',
    //                 iconProps: { iconName: 'Calendar' },
    //             },
    //             {
    //                 key: 'export-online',
    //                 text: 'To Windows Batch File...',
    //                 iconProps: { iconName: 'Calendar' },
    //             },
    //             {
    //                 key: 'export-community',
    //                 text: 'To Haxe...',
    //                 iconProps: { iconName: 'Mail' },
    //                 ['data-automation-id']: 'newEmailButton', // optional
    //             },
    //         ],
    //     },
    // },
    {
        key: 'execute',
        text: 'Execute',
        iconProps: { iconName: 'Download' },
        onClick: () => console.log('Download'),
        subMenuProps: {
            items: [
                {
                    key: 'execute-debug',
                    text: 'Debug...',
                    iconProps: { iconName: 'Calendar' },
                },
                {
                    key: 'execute-run',
                    text: 'Run Pipeline',
                    iconProps: { iconName: 'Calendar' },
                },
                {
                    key: 'export-run-sandbox',
                    text: 'Run Sandboxed',
                    iconProps: { iconName: 'Calendar' },
                    // subMenuProps: {
                    //     items: [
                    //         {
                    //             key: 'export-online',
                    //             text: 'To Windows Batch File...',
                    //             iconProps: { iconName: 'Calendar' },
                    //         },
                    //         {
                    //             key: 'export-community',
                    //             text: 'To Haxe...',
                    //             iconProps: { iconName: 'Mail' },
                    //             ['data-automation-id']: 'newEmailButton', // optional
                    //         },
                    //     ]
                    // }
                },
            ],
        },
    },
];

const _overflowItems: ICommandBarItemProps[] = [
    { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
    { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
    { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } },
];

const _farItems: ICommandBarItemProps[] = [
    {
        key: 'tile',
        text: 'Grid view',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Grid view',
        iconOnly: true,
        iconProps: { iconName: 'Tiles' },
        onClick: () => console.log('Tiles'),
    },
    {
        key: 'options',
        text: 'Options',
        iconProps: { iconName: 'GlobalNavButton' },
        onClick: () => console.log('Info'),
        subMenuProps: {
            items: [
                {
                    key: 'options-sign-in',
                    text: 'Sign In',
                    iconProps: { iconName: 'SignIn' },
                    onClick: () => console.log('Tiles'),
                },
                {
                    key: 'options-settings',
                    text: 'Settings',
                    iconProps: { iconName: 'Settings' },
                    onClick: () => console.log('Tiles'),
                },
            ]
        }
    },
];


const overflowProps: IButtonProps = { ariaLabel: 'More commands' };


export class MainHeader extends Component {

    render() {
        return (
            <div>
                <CommandBar
                    items={_items}
                    // overflowItems={_overflowItems}
                    // overflowButtonProps={overflowProps}
                    farItems={_farItems}
                    

                    ariaLabel="Use left and right arrow keys to navigate between commands"
                />

                <div style={{
                    height: '1px',
                    backgroundColor: '#000',
                }}>

                </div>
            </div>
        );
    }

}

