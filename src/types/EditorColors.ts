// To parse this data:
//
//   import { Convert, Coordinate } from "./file";
//
//   const coordinate = Convert.toCoordinate(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { ThemeNames } from "../Compile";

export type EditorColors = {
    /**
     * Background color for toggled action items in action bar.
     */
    "actionBar.toggledBackground": null | ThemeNames;
    /**
     * Activity bar background color for the active item. The activity bar is showing on the far
     * left or right and allows to switch between views of the side bar.
     */
    "activityBar.activeBackground": null | ThemeNames;
    /**
     * Activity bar border color for the active item. The activity bar is showing on the far
     * left or right and allows to switch between views of the side bar.
     */
    "activityBar.activeBorder": null | ThemeNames;
    /**
     * Activity bar focus border color for the active item. The activity bar is showing on the
     * far left or right and allows to switch between views of the side bar.
     */
    "activityBar.activeFocusBorder": null | ThemeNames;
    /**
     * Activity bar background color. The activity bar is showing on the far left or right and
     * allows to switch between views of the side bar.
     */
    "activityBar.background": null | ThemeNames;
    /**
     * Activity bar border color separating to the side bar. The activity bar is showing on the
     * far left or right and allows to switch between views of the side bar.
     */
    "activityBar.border": null | ThemeNames;
    /**
     * Drag and drop feedback color for the activity bar items. The activity bar is showing on
     * the far left or right and allows to switch between views of the side bar.
     */
    "activityBar.dropBorder": null | ThemeNames;
    /**
     * Activity bar item foreground color when it is active. The activity bar is showing on the
     * far left or right and allows to switch between views of the side bar.
     */
    "activityBar.foreground": null | ThemeNames;
    /**
     * Activity bar item foreground color when it is inactive. The activity bar is showing on
     * the far left or right and allows to switch between views of the side bar.
     */
    "activityBar.inactiveForeground": null | ThemeNames;
    /**
     * Activity notification badge background color. The activity bar is showing on the far left
     * or right and allows to switch between views of the side bar.
     */
    "activityBarBadge.background": null | ThemeNames;
    /**
     * Activity notification badge foreground color. The activity bar is showing on the far left
     * or right and allows to switch between views of the side bar.
     */
    "activityBarBadge.foreground": null | ThemeNames;
    /**
     * Badge background color. Badges are small information labels, e.g. for search results
     * count.
     */
    "badge.background": null | ThemeNames;
    /**
     * Badge foreground color. Badges are small information labels, e.g. for search results
     * count.
     */
    "badge.foreground": null | ThemeNames;
    /**
     * Banner background color. The banner is shown under the title bar of the window.
     */
    "banner.background": null | ThemeNames;
    /**
     * Banner foreground color. The banner is shown under the title bar of the window.
     */
    "banner.foreground": null | ThemeNames;
    /**
     * Banner icon color. The banner is shown under the title bar of the window.
     */
    "banner.iconForeground": null | ThemeNames;
    /**
     * Color of selected breadcrumb items.
     */
    "breadcrumb.activeSelectionForeground": null | ThemeNames;
    /**
     * Background color of breadcrumb items.
     */
    "breadcrumb.background": null | ThemeNames;
    /**
     * Color of focused breadcrumb items.
     */
    "breadcrumb.focusForeground": null | ThemeNames;
    /**
     * Color of focused breadcrumb items.
     */
    "breadcrumb.foreground": null | ThemeNames;
    /**
     * Background color of breadcrumb item picker.
     */
    "breadcrumbPicker.background": null | ThemeNames;
    /**
     * Button background color.
     */
    "button.background": null | ThemeNames;
    /**
     * Button border color.
     */
    "button.border": null | ThemeNames;
    /**
     * Button foreground color.
     */
    "button.foreground": null | ThemeNames;
    /**
     * Button background color when hovering.
     */
    "button.hoverBackground": null | ThemeNames;
    /**
     * Secondary button background color.
     */
    "button.secondaryBackground": null | ThemeNames;
    /**
     * Secondary button foreground color.
     */
    "button.secondaryForeground": null | ThemeNames;
    /**
     * Secondary button background color when hovering.
     */
    "button.secondaryHoverBackground": null | ThemeNames;
    /**
     * Button separator color.
     */
    "button.separator": null | ThemeNames;
    /**
     * The blue color used in chart visualizations.
     */
    "charts.blue": null | ThemeNames;
    /**
     * The foreground color used in charts.
     */
    "charts.foreground": null | ThemeNames;
    /**
     * The green color used in chart visualizations.
     */
    "charts.green": null | ThemeNames;
    /**
     * The color used for horizontal lines in charts.
     */
    "charts.lines": null | ThemeNames;
    /**
     * The orange color used in chart visualizations.
     */
    "charts.orange": null | ThemeNames;
    /**
     * The purple color used in chart visualizations.
     */
    "charts.purple": null | ThemeNames;
    /**
     * The red color used in chart visualizations.
     */
    "charts.red": null | ThemeNames;
    /**
     * The yellow color used in chart visualizations.
     */
    "charts.yellow": null | ThemeNames;
    /**
     * The border color of a chat request.
     */
    "chat.requestBorder": null | ThemeNames;
    /**
     * The background color of a chat slash command.
     */
    "chat.slashCommandBackground": null | ThemeNames;
    /**
     * The foreground color of a chat slash command.
     */
    "chat.slashCommandForeground": null | ThemeNames;
    /**
     * Background color of checkbox widget.
     */
    "checkbox.background": null | ThemeNames;
    /**
     * Border color of checkbox widget.
     */
    "checkbox.border": null | ThemeNames;
    /**
     * Foreground color of checkbox widget.
     */
    "checkbox.foreground": null | ThemeNames;
    /**
     * Background color of checkbox widget when the element it's in is selected.
     */
    "checkbox.selectBackground": null | ThemeNames;
    /**
     * Border color of checkbox widget when the element it's in is selected.
     */
    "checkbox.selectBorder": null | ThemeNames;
    /**
     * Active background color of the command center
     */
    "commandCenter.activeBackground": null | ThemeNames;
    /**
     * Command Center background color when a program is being debugged.
     */
    "commandCenter.activeBorder": null | ThemeNames;
    /**
    * Active border color of the command center
    */
    "commandCenter.debuggingBackground": null | ThemeNames;
    /**
     * Active foreground color of the command center
     */
    "commandCenter.activeForeground": null | ThemeNames;
    /**
     * Background color of the command center
     */
    "commandCenter.background": null | ThemeNames;
    /**
     * Border color of the command center
     */
    "commandCenter.border": null | ThemeNames;
    /**
     * Foreground color of the command center
     */
    "commandCenter.foreground": null | ThemeNames;
    /**
     * Border color of the command center when the window is inactive
     */
    "commandCenter.inactiveBorder": null | ThemeNames;
    /**
     * Foreground color of the command center when the window is inactive
     */
    "commandCenter.inactiveForeground": null | ThemeNames;
    /**
     * Icon color for resolved comments.
     */
    "commentsView.resolvedIcon": null | ThemeNames;
    /**
     * Icon color for unresolved comments.
     */
    "commentsView.unresolvedIcon": null | ThemeNames;
    /**
     * An extra border around active elements to separate them from others for greater contrast.
     */
    contrastActiveBorder?: null | ThemeNames;
    /**
     * An extra border around elements to separate them from others for greater contrast.
     */
    contrastBorder?: null | ThemeNames;
    /**
     * Foreground color for error messages in debug REPL console.
     */
    "debugConsole.errorForeground": null | ThemeNames;
    /**
     * Foreground color for info messages in debug REPL console.
     */
    "debugConsole.infoForeground": null | ThemeNames;
    /**
     * Foreground color for source filenames in debug REPL console.
     */
    "debugConsole.sourceForeground": null | ThemeNames;
    /**
     * Foreground color for warning messages in debug REPL console.
     */
    "debugConsole.warningForeground": null | ThemeNames;
    /**
     * Foreground color for debug console input marker icon.
     */
    "debugConsoleInputIcon.foreground": null | ThemeNames;
    /**
     * Exception widget background color.
     */
    "debugExceptionWidget.background": null | ThemeNames;
    /**
     * Exception widget border color.
     */
    "debugExceptionWidget.border": null | ThemeNames;
    /**
     * Icon color for the current breakpoint stack frame.
     */
    "debugIcon.breakpointCurrentStackframeForeground": null | ThemeNames;
    /**
     * Icon color for disabled breakpoints.
     */
    "debugIcon.breakpointDisabledForeground": null | ThemeNames;
    /**
     * Icon color for breakpoints.
     */
    "debugIcon.breakpointForeground": null | ThemeNames;
    /**
     * Icon color for all breakpoint stack frames.
     */
    "debugIcon.breakpointStackframeForeground": null | ThemeNames;
    /**
     * Icon color for unverified breakpoints.
     */
    "debugIcon.breakpointUnverifiedForeground": null | ThemeNames;
    /**
     * Debug toolbar icon for continue.
     */
    "debugIcon.continueForeground": null | ThemeNames;
    /**
     * Debug toolbar icon for disconnect.
     */
    "debugIcon.disconnectForeground": null | ThemeNames;
    /**
     * Debug toolbar icon for pause.
     */
    "debugIcon.pauseForeground": null | ThemeNames;
    /**
     * Debug toolbar icon for restart.
     */
    "debugIcon.restartForeground": null | ThemeNames;
    /**
     * Debug toolbar icon for start debugging.
     */
    "debugIcon.startForeground": null | ThemeNames;
    /**
     * Debug toolbar icon for step back.
     */
    "debugIcon.stepBackForeground": null | ThemeNames;
    /**
     * Debug toolbar icon for step into.
     */
    "debugIcon.stepIntoForeground": null | ThemeNames;
    /**
     * Debug toolbar icon for step over.
     */
    "debugIcon.stepOutForeground": null | ThemeNames;
    /**
     * Debug toolbar icon for step over.
     */
    "debugIcon.stepOverForeground": null | ThemeNames;
    /**
     * Debug toolbar icon for stop.
     */
    "debugIcon.stopForeground": null | ThemeNames;
    /**
     * Foreground color for booleans in the debug views (ie. the Variables or Watch view).
     */
    "debugTokenExpression.boolean": null | ThemeNames;
    /**
     * Foreground color for expression errors in the debug views (ie. the Variables or Watch
     * view) and for error logs shown in the debug console.
     */
    "debugTokenExpression.error": null | ThemeNames;
    /**
     * Foreground color for the token names shown in the debug views (ie. the Variables or Watch
     * view).
     */
    "debugTokenExpression.name": null | ThemeNames;
    /**
     * Foreground color for numbers in the debug views (ie. the Variables or Watch view).
     */
    "debugTokenExpression.number": null | ThemeNames;
    /**
     * Foreground color for strings in the debug views (ie. the Variables or Watch view).
     */
    "debugTokenExpression.string": null | ThemeNames;
    /**
     * Foreground color for the token values shown in the debug views (ie. the Variables or
     * Watch view).
     */
    "debugTokenExpression.value": null | ThemeNames;
    /**
     * Debug toolbar background color.
     */
    "debugToolBar.background": null | ThemeNames;
    /**
     * Debug toolbar border color.
     */
    "debugToolBar.border": null | ThemeNames;
    /**
     * Background color for a label shown in the CALL STACK view when the debugger breaks on an
     * exception.
     */
    "debugView.exceptionLabelBackground": null | ThemeNames;
    /**
     * Foreground color for a label shown in the CALL STACK view when the debugger breaks on an
     * exception.
     */
    "debugView.exceptionLabelForeground": null | ThemeNames;
    /**
     * Background color for a label in the CALL STACK view showing the current session's or
     * thread's state.
     */
    "debugView.stateLabelBackground": null | ThemeNames;
    /**
     * Foreground color for a label in the CALL STACK view showing the current session's or
     * thread's state.
     */
    "debugView.stateLabelForeground": null | ThemeNames;
    /**
     * Color used to highlight value changes in the debug views (ie. in the Variables view).
     */
    "debugView.valueChangedHighlight": null | ThemeNames;
    /**
     * Foreground color for description text providing additional information, for example for a
     * label.
     */
    descriptionForeground?: null | ThemeNames;
    /**
     * Border color between the two text editors.
     */
    "diffEditor.border": null | ThemeNames;
    /**
     * Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff
     * views.
     */
    "diffEditor.diagonalFill": null | ThemeNames;
    /**
     * Background color for lines that got inserted. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "diffEditor.insertedLineBackground": null | ThemeNames;
    /**
     * Background color for text that got inserted. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "diffEditor.insertedTextBackground": null | ThemeNames;
    /**
     * Outline color for the text that got inserted.
     */
    "diffEditor.insertedTextBorder": null | ThemeNames;
    /**
     * The border color for text that got moved in the diff editor.
     */
    "diffEditor.move.border": null | ThemeNames;
    /**
     * The active border color for text that got moved in the diff editor.
     */
    "diffEditor.moveActive.border": null | ThemeNames;
    /**
     * Background color for lines that got removed. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "diffEditor.removedLineBackground": null | ThemeNames;
    /**
     * Background color for text that got removed. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "diffEditor.removedTextBackground": null | ThemeNames;
    /**
     * Outline color for text that got removed.
     */
    "diffEditor.removedTextBorder": null | ThemeNames;
    /**
     * The background color of unchanged code in the diff editor.
     */
    "diffEditor.unchangedCodeBackground": null | ThemeNames;
    /**
     * The background color of unchanged blocks in the diff editor.
     */
    "diffEditor.unchangedRegionBackground": null | ThemeNames;
    /**
     * The foreground color of unchanged blocks in the diff editor.
     */
    "diffEditor.unchangedRegionForeground": null | ThemeNames;
    /**
     * Background color for the margin where lines got inserted.
     */
    "diffEditorGutter.insertedLineBackground": null | ThemeNames;
    /**
     * Background color for the margin where lines got removed.
     */
    "diffEditorGutter.removedLineBackground": null | ThemeNames;
    /**
     * Diff overview ruler foreground for inserted content.
     */
    "diffEditorOverview.insertedForeground": null | ThemeNames;
    /**
     * Diff overview ruler foreground for removed content.
     */
    "diffEditorOverview.removedForeground": null | ThemeNames;
    /**
     * Overall foreground for disabled elements. This color is only used if not overridden by a
     * component.
     */
    disabledForeground?: null | ThemeNames;
    /**
     * Dropdown background.
     */
    "dropdown.background": null | ThemeNames;
    /**
     * Dropdown border.
     */
    "dropdown.border": null | ThemeNames;
    /**
     * Dropdown foreground.
     */
    "dropdown.foreground": null | ThemeNames;
    /**
     * Dropdown list background.
     */
    "dropdown.listBackground": null | ThemeNames;
    /**
     * Editor background color.
     */
    "editor.background": null | ThemeNames;
    /**
     * Color of the current search match.
     */
    "editor.findMatchBackground": null | ThemeNames;
    /**
     * Border color of the current search match.
     */
    "editor.findMatchBorder": null | ThemeNames;
    /**
     * Color of the other search matches. The color must not be opaque so as not to hide
     * underlying decorations.
     */
    "editor.findMatchHighlightBackground": null | ThemeNames;
    /**
     * Border color of the other search matches.
     */
    "editor.findMatchHighlightBorder": null | ThemeNames;
    /**
     * Color of the range limiting the search. The color must not be opaque so as not to hide
     * underlying decorations.
     */
    "editor.findRangeHighlightBackground": null | ThemeNames;
    /**
     * Border color of the range limiting the search. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "editor.findRangeHighlightBorder": null | ThemeNames;
    /**
     * Background color for the highlight of line at focused stack frame position.
     */
    "editor.focusedStackFrameHighlightBackground": null | ThemeNames;
    /**
     * Background color behind folded ranges. The color must not be opaque so as not to hide
     * underlying decorations.
     */
    "editor.foldBackground": null | ThemeNames;
    /**
     * Editor default foreground color.
     */
    "editor.foreground": null | ThemeNames;
    /**
     * Highlight below the word for which a hover is shown. The color must not be opaque so as
     * not to hide underlying decorations.
     */
    "editor.hoverHighlightBackground": null | ThemeNames;
    /**
     * Color of the selection in an inactive editor. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "editor.inactiveSelectionBackground": null | ThemeNames;
    /**
     * Color for the debug inline value background.
     */
    "editor.inlineValuesBackground": null | ThemeNames;
    /**
     * Color for the debug inline value text.
     */
    "editor.inlineValuesForeground": null | ThemeNames;
    /**
     * Background color for the highlight of line at the cursor position.
     */
    "editor.lineHighlightBackground": null | ThemeNames;
    /**
     * Background color for the border around the line at the cursor position.
     */
    "editor.lineHighlightBorder": null | ThemeNames;
    /**
     * Background color when the editor auto renames on type.
     */
    "editor.linkedEditingBackground": null | ThemeNames;
    /**
     * Background color of highlighted ranges, like by quick open and find features. The color
     * must not be opaque so as not to hide underlying decorations.
     */
    "editor.rangeHighlightBackground": null | ThemeNames;
    /**
     * Background color of the border around highlighted ranges.
     */
    "editor.rangeHighlightBorder": null | ThemeNames;
    /**
     * Color of the editor selection.
     */
    "editor.selectionBackground": null | ThemeNames;
    /**
     * Color of the selected text for high contrast.
     */
    "editor.selectionForeground": null | ThemeNames;
    /**
     * Color for regions with the same content as the selection. The color must not be opaque so
     * as not to hide underlying decorations.
     */
    "editor.selectionHighlightBackground": null | ThemeNames;
    /**
     * Border color for regions with the same content as the selection.
     */
    "editor.selectionHighlightBorder": null | ThemeNames;
    /**
     * Highlight background color of the final tabstop of a snippet.
     */
    "editor.snippetFinalTabstopHighlightBackground": null | ThemeNames;
    /**
     * Highlight border color of the final tabstop of a snippet.
     */
    "editor.snippetFinalTabstopHighlightBorder": null | ThemeNames;
    /**
     * Highlight background color of a snippet tabstop.
     */
    "editor.snippetTabstopHighlightBackground": null | ThemeNames;
    /**
     * Highlight border color of a snippet tabstop.
     */
    "editor.snippetTabstopHighlightBorder": null | ThemeNames;
    /**
     * Background color for the highlight of line at the top stack frame position.
     */
    "editor.stackFrameHighlightBackground": null | ThemeNames;
    /**
     * Background color of highlighted symbol, like for go to definition or go next/previous
     * symbol. The color must not be opaque so as not to hide underlying decorations.
     */
    "editor.symbolHighlightBackground": null | ThemeNames;
    /**
     * Background color of the border around highlighted symbols.
     */
    "editor.symbolHighlightBorder": null | ThemeNames;
    /**
     * Background color of a symbol during read-access, like reading a variable. The color must
     * not be opaque so as not to hide underlying decorations.
     */
    "editor.wordHighlightBackground": null | ThemeNames;
    /**
     * Border color of a symbol during read-access, like reading a variable.
     */
    "editor.wordHighlightBorder": null | ThemeNames;
    /**
     * Background color of a symbol during write-access, like writing to a variable. The color
     * must not be opaque so as not to hide underlying decorations.
     */
    "editor.wordHighlightStrongBackground": null | ThemeNames;
    /**
     * Border color of a symbol during write-access, like writing to a variable.
     */
    "editor.wordHighlightStrongBorder": null | ThemeNames;
    /**
     * Background color of a textual occurrence for a symbol. The color must not be opaque so as
     * not to hide underlying decorations.
     */
    "editor.wordHighlightTextBackground": null | ThemeNames;
    /**
     * Border color of a textual occurrence for a symbol.
     */
    "editor.wordHighlightTextBorder": null | ThemeNames;
    /**
     * Foreground color of brackets (1). Requires enabling bracket pair colorization.
     */
    "editorBracketHighlight.foreground1": null | ThemeNames;
    /**
     * Foreground color of brackets (2). Requires enabling bracket pair colorization.
     */
    "editorBracketHighlight.foreground2": null | ThemeNames;
    /**
     * Foreground color of brackets (3). Requires enabling bracket pair colorization.
     */
    "editorBracketHighlight.foreground3": null | ThemeNames;
    /**
     * Foreground color of brackets (4). Requires enabling bracket pair colorization.
     */
    "editorBracketHighlight.foreground4": null | ThemeNames;
    /**
     * Foreground color of brackets (5). Requires enabling bracket pair colorization.
     */
    "editorBracketHighlight.foreground5": null | ThemeNames;
    /**
     * Foreground color of brackets (6). Requires enabling bracket pair colorization.
     */
    "editorBracketHighlight.foreground6": null | ThemeNames;
    /**
     * Foreground color of unexpected brackets.
     */
    "editorBracketHighlight.unexpectedBracket.foreground": null | ThemeNames;
    /**
     * Background color behind matching brackets
     */
    "editorBracketMatch.background": null | ThemeNames;
    /**
     * Color for matching brackets boxes
     */
    "editorBracketMatch.border": null | ThemeNames;
    /**
     * Background color of active bracket pair guides (1). Requires enabling bracket pair guides.
     */
    "editorBracketPairGuide.activeBackground1": null | ThemeNames;
    /**
     * Background color of active bracket pair guides (2). Requires enabling bracket pair guides.
     */
    "editorBracketPairGuide.activeBackground2": null | ThemeNames;
    /**
     * Background color of active bracket pair guides (3). Requires enabling bracket pair guides.
     */
    "editorBracketPairGuide.activeBackground3": null | ThemeNames;
    /**
     * Background color of active bracket pair guides (4). Requires enabling bracket pair guides.
     */
    "editorBracketPairGuide.activeBackground4": null | ThemeNames;
    /**
     * Background color of active bracket pair guides (5). Requires enabling bracket pair guides.
     */
    "editorBracketPairGuide.activeBackground5": null | ThemeNames;
    /**
     * Background color of active bracket pair guides (6). Requires enabling bracket pair guides.
     */
    "editorBracketPairGuide.activeBackground6": null | ThemeNames;
    /**
     * Background color of inactive bracket pair guides (1). Requires enabling bracket pair
     * guides.
     */
    "editorBracketPairGuide.background1": null | ThemeNames;
    /**
     * Background color of inactive bracket pair guides (2). Requires enabling bracket pair
     * guides.
     */
    "editorBracketPairGuide.background2": null | ThemeNames;
    /**
     * Background color of inactive bracket pair guides (3). Requires enabling bracket pair
     * guides.
     */
    "editorBracketPairGuide.background3": null | ThemeNames;
    /**
     * Background color of inactive bracket pair guides (4). Requires enabling bracket pair
     * guides.
     */
    "editorBracketPairGuide.background4": null | ThemeNames;
    /**
     * Background color of inactive bracket pair guides (5). Requires enabling bracket pair
     * guides.
     */
    "editorBracketPairGuide.background5": null | ThemeNames;
    /**
     * Background color of inactive bracket pair guides (6). Requires enabling bracket pair
     * guides.
     */
    "editorBracketPairGuide.background6": null | ThemeNames;
    /**
     * Foreground color of editor CodeLens
     */
    "editorCodeLens.foreground": null | ThemeNames;
    /**
     * Color of background for currently selected or hovered comment range.
     */
    "editorCommentsWidget.rangeActiveBackground": null | ThemeNames;
    /**
     * Color of background for comment ranges.
     */
    "editorCommentsWidget.rangeBackground": null | ThemeNames;
    /**
     * Color of borders and arrow for resolved comments.
     */
    "editorCommentsWidget.resolvedBorder": null | ThemeNames;
    /**
     * Color of borders and arrow for unresolved comments.
     */
    "editorCommentsWidget.unresolvedBorder": null | ThemeNames;
    /**
     * The background color of the editor cursor. Allows customizing the color of a character
     * overlapped by a block cursor.
     */
    "editorCursor.background": null | ThemeNames;
    /**
     * Color of the editor cursor.
     */
    "editorCursor.foreground": null | ThemeNames;
    /**
     * Background color of error text in the editor. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "editorError.background": null | ThemeNames;
    /**
     * If set, color of double underlines for errors in the editor.
     */
    "editorError.border": null | ThemeNames;
    /**
     * Foreground color of error squigglies in the editor.
     */
    "editorError.foreground": null | ThemeNames;
    /**
     * Background color of the ghost text in the editor.
     */
    "editorGhostText.background": null | ThemeNames;
    /**
     * Border color of ghost text in the editor.
     */
    "editorGhostText.border": null | ThemeNames;
    /**
     * Foreground color of the ghost text in the editor.
     */
    "editorGhostText.foreground": null | ThemeNames;
    /**
     * Color to separate multiple editor groups from each other. Editor groups are the
     * containers of editors.
     */
    "editorGroup.border": null | ThemeNames;
    /**
     * Background color when dragging editors around. The color should have transparency so that
     * the editor contents can still shine through.
     */
    "editorGroup.dropBackground": null | ThemeNames;
    /**
     * Background color of text shown over editors when dragging files. This text informs the
     * user that they can hold shift to drop into the editor.
     */
    "editorGroup.dropIntoPromptBackground": null | ThemeNames;
    /**
     * Border color of text shown over editors when dragging files. This text informs the user
     * that they can hold shift to drop into the editor.
     */
    "editorGroup.dropIntoPromptBorder": null | ThemeNames;
    /**
     * Foreground color of text shown over editors when dragging files. This text informs the
     * user that they can hold shift to drop into the editor.
     */
    "editorGroup.dropIntoPromptForeground": null | ThemeNames;
    /**
     * Background color of an empty editor group. Editor groups are the containers of editors.
     */
    "editorGroup.emptyBackground": null | ThemeNames;
    /**
     * Border color of an empty editor group that is focused. Editor groups are the containers
     * of editors.
     */
    "editorGroup.focusedEmptyBorder": null | ThemeNames;
    /**
     * Border color of the editor group title header. Editor groups are the containers of
     * editors.
     */
    "editorGroupHeader.border": null | ThemeNames;
    /**
     * Background color of the editor group title header when tabs are disabled
     * (`"workbench.editor.showTabs": false`). Editor groups are the containers of editors.
     */
    "editorGroupHeader.noTabsBackground": null | ThemeNames;
    /**
     * Background color of the editor group title header when tabs are enabled. Editor groups
     * are the containers of editors.
     */
    "editorGroupHeader.tabsBackground": null | ThemeNames;
    /**
     * Border color of the editor group title header when tabs are enabled. Editor groups are
     * the containers of editors.
     */
    "editorGroupHeader.tabsBorder": null | ThemeNames;
    /**
     * Editor gutter background color for lines that are added.
     */
    "editorGutter.addedBackground": null | ThemeNames;
    /**
     * Background color of the editor gutter. The gutter contains the glyph margins and the line
     * numbers.
     */
    "editorGutter.background": null | ThemeNames;
    /**
     * Editor gutter decoration color for commenting glyphs.
     */
    "editorGutter.commentGlyphForeground": null | ThemeNames;
    /**
     * Editor gutter decoration color for commenting ranges. This color should be opaque.
     */
    "editorGutter.commentRangeForeground": null | ThemeNames;
    /**
     * Editor gutter decoration color for commenting glyphs for unresolved comment threads.
     */
    "editorGutter.commentUnresolvedGlyphForeground": null | ThemeNames;
    /**
     * Editor gutter background color for lines that are deleted.
     */
    "editorGutter.deletedBackground": null | ThemeNames;
    /**
     * Color of the folding control in the editor gutter.
     */
    "editorGutter.foldingControlForeground": null | ThemeNames;
    /**
     * Editor gutter background color for lines that are modified.
     */
    "editorGutter.modifiedBackground": null | ThemeNames;
    /**
     * If set, color of double underlines for hints in the editor.
     */
    "editorHint.border": null | ThemeNames;
    /**
     * Foreground color of hint squigglies in the editor.
     */
    "editorHint.foreground": null | ThemeNames;
    /**
     * Background color of the editor hover.
     */
    "editorHoverWidget.background": null | ThemeNames;
    /**
     * Border color of the editor hover.
     */
    "editorHoverWidget.border": null | ThemeNames;
    /**
     * Foreground color of the editor hover.
     */
    "editorHoverWidget.foreground": null | ThemeNames;
    /**
     * Foreground color of the active item in the parameter hint.
     */
    "editorHoverWidget.highlightForeground": null | ThemeNames;
    /**
     * Background color of the editor hover status bar.
     */
    "editorHoverWidget.statusBarBackground": null | ThemeNames;
    /**
     * Color of the active editor indentation guides (1).
     */
    "editorIndentGuide.activeBackground1": null | ThemeNames;
    /**
     * Color of the active editor indentation guides (2).
     */
    "editorIndentGuide.activeBackground2": null | ThemeNames;
    /**
     * Color of the active editor indentation guides (3).
     */
    "editorIndentGuide.activeBackground3": null | ThemeNames;
    /**
     * Color of the active editor indentation guides (4).
     */
    "editorIndentGuide.activeBackground4": null | ThemeNames;
    /**
     * Color of the active editor indentation guides (5).
     */
    "editorIndentGuide.activeBackground5": null | ThemeNames;
    /**
     * Color of the active editor indentation guides (6).
     */
    "editorIndentGuide.activeBackground6": null | ThemeNames;
    /**
     * Color of the editor indentation guides (1).
     */
    "editorIndentGuide.background1": null | ThemeNames;
    /**
     * Color of the editor indentation guides (2).
     */
    "editorIndentGuide.background2": null | ThemeNames;
    /**
     * Color of the editor indentation guides (3).
     */
    "editorIndentGuide.background3": null | ThemeNames;
    /**
     * Color of the editor indentation guides (4).
     */
    "editorIndentGuide.background4": null | ThemeNames;
    /**
     * Color of the editor indentation guides (5).
     */
    "editorIndentGuide.background5": null | ThemeNames;
    /**
     * Color of the editor indentation guides (6).
     */
    "editorIndentGuide.background6": null | ThemeNames;
    /**
     * Background color of info text in the editor. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "editorInfo.background": null | ThemeNames;
    /**
     * If set, color of double underlines for infos in the editor.
     */
    "editorInfo.border": null | ThemeNames;
    /**
     * Foreground color of info squigglies in the editor.
     */
    "editorInfo.foreground": null | ThemeNames;
    /**
     * Background color of inline hints
     */
    "editorInlayHint.background": null | ThemeNames;
    /**
     * Foreground color of inline hints
     */
    "editorInlayHint.foreground": null | ThemeNames;
    /**
     * Background color of inline hints for parameters
     */
    "editorInlayHint.parameterBackground": null | ThemeNames;
    /**
     * Foreground color of inline hints for parameters
     */
    "editorInlayHint.parameterForeground": null | ThemeNames;
    /**
     * Background color of inline hints for types
     */
    "editorInlayHint.typeBackground": null | ThemeNames;
    /**
     * Foreground color of inline hints for types
     */
    "editorInlayHint.typeForeground": null | ThemeNames;
    /**
     * The color used for the lightbulb actions icon.
     */
    "editorLightBulb.foreground": null | ThemeNames;
    /**
     * The color used for the lightbulb auto fix actions icon.
     */
    "editorLightBulbAutoFix.foreground": null | ThemeNames;
    /**
     * Color of editor active line number
     */
    "editorLineNumber.activeForeground": null | ThemeNames;
    /**
     * Color of the final editor line when editor.renderFinalNewline is set to dimmed.
     */
    "editorLineNumber.dimmedForeground": null | ThemeNames;
    /**
     * Color of editor line numbers.
     */
    "editorLineNumber.foreground": null | ThemeNames;
    /**
     * Color of active links.
     */
    "editorLink.activeForeground": null | ThemeNames;
    /**
     * Editor marker navigation widget background.
     */
    "editorMarkerNavigation.background": null | ThemeNames;
    /**
     * Editor marker navigation widget error color.
     */
    "editorMarkerNavigationError.background": null | ThemeNames;
    /**
     * Editor marker navigation widget error heading background.
     */
    "editorMarkerNavigationError.headerBackground": null | ThemeNames;
    /**
     * Editor marker navigation widget info color.
     */
    "editorMarkerNavigationInfo.background": null | ThemeNames;
    /**
     * Editor marker navigation widget info heading background.
     */
    "editorMarkerNavigationInfo.headerBackground": null | ThemeNames;
    /**
     * Editor marker navigation widget warning color.
     */
    "editorMarkerNavigationWarning.background": null | ThemeNames;
    /**
     * Editor marker navigation widget warning heading background.
     */
    "editorMarkerNavigationWarning.headerBackground": null | ThemeNames;
    /**
     * Overview ruler marker color for added content.
     */
    "editorOverviewRuler.addedForeground": null | ThemeNames;
    /**
     * Background color of the editor overview ruler.
     */
    "editorOverviewRuler.background": null | ThemeNames;
    /**
     * Color of the overview ruler border.
     */
    "editorOverviewRuler.border": null | ThemeNames;
    /**
     * Overview ruler marker color for matching brackets.
     */
    "editorOverviewRuler.bracketMatchForeground": null | ThemeNames;
    /**
     * Editor overview ruler decoration color for resolved comments. This color should be opaque.
     */
    "editorOverviewRuler.commentForeground": null | ThemeNames;
    /**
     * Editor overview ruler decoration color for unresolved comments. This color should be
     * opaque.
     */
    "editorOverviewRuler.commentUnresolvedForeground": null | ThemeNames;
    /**
     * Common ancestor overview ruler foreground for inline merge-conflicts.
     */
    "editorOverviewRuler.commonContentForeground": null | ThemeNames;
    /**
     * Current overview ruler foreground for inline merge-conflicts.
     */
    "editorOverviewRuler.currentContentForeground": null | ThemeNames;
    /**
     * Overview ruler marker color for deleted content.
     */
    "editorOverviewRuler.deletedForeground": null | ThemeNames;
    /**
     * Overview ruler marker color for errors.
     */
    "editorOverviewRuler.errorForeground": null | ThemeNames;
    /**
     * Overview ruler marker color for find matches. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "editorOverviewRuler.findMatchForeground": null | ThemeNames;
    /**
     * Incoming overview ruler foreground for inline merge-conflicts.
     */
    "editorOverviewRuler.incomingContentForeground": null | ThemeNames;
    /**
     * Overview ruler marker color for infos.
     */
    "editorOverviewRuler.infoForeground": null | ThemeNames;
    /**
     * Overview ruler marker color for modified content.
     */
    "editorOverviewRuler.modifiedForeground": null | ThemeNames;
    /**
     * Overview ruler marker color for range highlights. The color must not be opaque so as not
     * to hide underlying decorations.
     */
    "editorOverviewRuler.rangeHighlightForeground": null | ThemeNames;
    /**
     * Overview ruler marker color for selection highlights. The color must not be opaque so as
     * not to hide underlying decorations.
     */
    "editorOverviewRuler.selectionHighlightForeground": null | ThemeNames;
    /**
     * Overview ruler marker color for warnings.
     */
    "editorOverviewRuler.warningForeground": null | ThemeNames;
    /**
     * Overview ruler marker color for symbol highlights. The color must not be opaque so as not
     * to hide underlying decorations.
     */
    "editorOverviewRuler.wordHighlightForeground": null | ThemeNames;
    /**
     * Overview ruler marker color for write-access symbol highlights. The color must not be
     * opaque so as not to hide underlying decorations.
     */
    "editorOverviewRuler.wordHighlightStrongForeground": null | ThemeNames;
    /**
     * Overview ruler marker color of a textual occurrence for a symbol. The color must not be
     * opaque so as not to hide underlying decorations.
     */
    "editorOverviewRuler.wordHighlightTextForeground": null | ThemeNames;
    /**
     * Background color of the editor pane visible on the left and right side of the centered
     * editor layout.
     */
    "editorPane.background": null | ThemeNames;
    /**
     * Color of the editor rulers.
     */
    "editorRuler.foreground": null | ThemeNames;
    /**
     * Sticky scroll background color for the editor
     */
    "editorStickyScroll.background": null | ThemeNames;
    /**
     * Sticky scroll on hover background color for the editor
     */
    "editorStickyScrollHover.background": null | ThemeNames;
    /**
     * Background color of the suggest widget.
     */
    "editorSuggestWidget.background": null | ThemeNames;
    /**
     * Border color of the suggest widget.
     */
    "editorSuggestWidget.border": null | ThemeNames;
    /**
     * Color of the match highlights in the suggest widget when an item is focused.
     */
    "editorSuggestWidget.focusHighlightForeground": null | ThemeNames;
    /**
     * Foreground color of the suggest widget.
     */
    "editorSuggestWidget.foreground": null | ThemeNames;
    /**
     * Color of the match highlights in the suggest widget.
     */
    "editorSuggestWidget.highlightForeground": null | ThemeNames;
    /**
     * Background color of the selected entry in the suggest widget.
     */
    "editorSuggestWidget.selectedBackground": null | ThemeNames;
    /**
     * Foreground color of the selected entry in the suggest widget.
     */
    "editorSuggestWidget.selectedForeground": null | ThemeNames;
    /**
     * Icon foreground color of the selected entry in the suggest widget.
     */
    "editorSuggestWidget.selectedIconForeground": null | ThemeNames;
    /**
     * Foreground color of the suggest widget status.
     */
    "editorSuggestWidgetStatus.foreground": null | ThemeNames;
    /**
     * Background color used to highlight unicode characters.
     */
    "editorUnicodeHighlight.background": null | ThemeNames;
    /**
     * Border color used to highlight unicode characters.
     */
    "editorUnicodeHighlight.border": null | ThemeNames;
    /**
     * Border color of unnecessary (unused) source code in the editor.
     */
    "editorUnnecessaryCode.border": null | ThemeNames;
    /**
     * Opacity of unnecessary (unused) source code in the editor. For example,null|string;
     * render the code with 75% opacity. For high contrast themes, use the
     * 'editorUnnecessaryCode.border' theme color to underline unnecessary code instead of
     * fading it out.
     */
    "editorUnnecessaryCode.opacity": null | ThemeNames;
    /**
     * Background color of warning text in the editor. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "editorWarning.background": null | ThemeNames;
    /**
     * If set, color of double underlines for warnings in the editor.
     */
    "editorWarning.border": null | ThemeNames;
    /**
     * Foreground color of warning squigglies in the editor.
     */
    "editorWarning.foreground": null | ThemeNames;
    /**
     * Color of whitespace characters in the editor.
     */
    "editorWhitespace.foreground": null | ThemeNames;
    /**
     * Background color of editor widgets, such as find/replace.
     */
    "editorWidget.background": null | ThemeNames;
    /**
     * Border color of editor widgets. The color is only used if the widget chooses to have a
     * border and if the color is not overridden by a widget.
     */
    "editorWidget.border": null | ThemeNames;
    /**
     * Foreground color of editor widgets, such as find/replace.
     */
    "editorWidget.foreground": null | ThemeNames;
    /**
     * Border color of the resize bar of editor widgets. The color is only used if the widget
     * chooses to have a resize border and if the color is not overridden by a widget.
     */
    "editorWidget.resizeBorder": null | ThemeNames;
    /**
     * Overall foreground color for error messages. This color is only used if not overridden by
     * a component.
     */
    errorForeground?: null | ThemeNames;
    /**
     * Background color for the remote badge in the extensions view.
     */
    "extensionBadge.remoteBackground": null | ThemeNames;
    /**
     * Foreground color for the remote badge in the extensions view.
     */
    "extensionBadge.remoteForeground": null | ThemeNames;
    /**
     * Button background color for extension actions.
     */
    "extensionButton.background": null | ThemeNames;
    /**
     * Button foreground color for extension actions.
     */
    "extensionButton.foreground": null | ThemeNames;
    /**
     * Button background hover color for extension actions.
     */
    "extensionButton.hoverBackground": null | ThemeNames;
    /**
     * Button background color for extension actions that stand out (e.g. install button).
     */
    "extensionButton.prominentBackground": null | ThemeNames;
    /**
     * Button foreground color for extension actions that stand out (e.g. install button).
     */
    "extensionButton.prominentForeground": null | ThemeNames;
    /**
     * Button background hover color for extension actions that stand out (e.g. install button).
     */
    "extensionButton.prominentHoverBackground": null | ThemeNames;
    /**
     * Button separator color for extension actions
     */
    "extensionButton.separator": null | ThemeNames;
    /**
     * The icon color for pre-release extension.
     */
    "extensionIcon.preReleaseForeground": null | ThemeNames;
    /**
     * The icon color for extension sponsor.
     */
    "extensionIcon.sponsorForeground": null | ThemeNames;
    /**
     * The icon color for extension ratings.
     */
    "extensionIcon.starForeground": null | ThemeNames;
    /**
     * The icon color for extension verified publisher.
     */
    "extensionIcon.verifiedForeground": null | ThemeNames;
    /**
     * Overall border color for focused elements. This color is only used if not overridden by a
     * component.
     */
    focusBorder?: null | ThemeNames;
    /**
     * Overall foreground color. This color is only used if not overridden by a component.
     */
    foreground?: null | ThemeNames;
    /**
     * Color for added resources.
     */
    "gitDecoration.addedResourceForeground": null | ThemeNames;
    /**
     * Color for resources with conflicts.
     */
    "gitDecoration.conflictingResourceForeground": null | ThemeNames;
    /**
     * Color for deleted resources.
     */
    "gitDecoration.deletedResourceForeground": null | ThemeNames;
    /**
     * Color for ignored resources.
     */
    "gitDecoration.ignoredResourceForeground": null | ThemeNames;
    /**
     * Color for modified resources.
     */
    "gitDecoration.modifiedResourceForeground": null | ThemeNames;
    /**
     * Color for renamed or copied resources.
     */
    "gitDecoration.renamedResourceForeground": null | ThemeNames;
    /**
     * Color for deleted resources which have been staged.
     */
    "gitDecoration.stageDeletedResourceForeground": null | ThemeNames;
    /**
     * Color for modified resources which have been staged.
     */
    "gitDecoration.stageModifiedResourceForeground": null | ThemeNames;
    /**
     * Color for submodule resources.
     */
    "gitDecoration.submoduleResourceForeground": null | ThemeNames;
    /**
     * Color for untracked resources.
     */
    "gitDecoration.untrackedResourceForeground": null | ThemeNames;
    /**
     * The default color for icons in the workbench.
     */
    "icon.foreground": null | ThemeNames;
    /**
     * Background color of the interactive editor widget
     */
    "inlineChat.background": null | ThemeNames;
    /**
     * Border color of the interactive editor widget
     */
    "inlineChat.border": null | ThemeNames;
    /**
     * Background highlighting of the current interactive region. Must be transparent.
     */
    "inlineChat.regionHighlight": null | ThemeNames;
    /**
     * Shadow color of the interactive editor widget
     */
    "inlineChat.shadow": null | ThemeNames;
    /**
     * Background color of inserted text in the interactive editor input
     */
    "inlineChatDiff.inserted": null | ThemeNames;
    /**
     * Background color of removed text in the interactive editor input
     */
    "inlineChatDiff.removed": null | ThemeNames;
    /**
     * Background color of the interactive editor input
     */
    "inlineChatInput.background": null | ThemeNames;
    /**
     * Border color of the interactive editor input
     */
    "inlineChatInput.border": null | ThemeNames;
    /**
     * Border color of the interactive editor input when focused
     */
    "inlineChatInput.focusBorder": null | ThemeNames;
    /**
     * Foreground color of the interactive editor input placeholder
     */
    "inlineChatInput.placeholderForeground": null | ThemeNames;
    /**
     * Input box background.
     */
    "input.background": null | ThemeNames;
    /**
     * Input box border.
     */
    "input.border": null | ThemeNames;
    /**
     * Input box foreground.
     */
    "input.foreground": null | ThemeNames;
    /**
     * Input box foreground color for placeholder text.
     */
    "input.placeholderForeground": null | ThemeNames;
    /**
     * Background hover color of options in input fields.
     */
    "inputOption.activeBackground": null | ThemeNames;
    /**
     * Border color of activated options in input fields.
     */
    "inputOption.activeBorder": null | ThemeNames;
    /**
     * Foreground color of activated options in input fields.
     */
    "inputOption.activeForeground": null | ThemeNames;
    /**
     * Background color of activated options in input fields.
     */
    "inputOption.hoverBackground": null | ThemeNames;
    /**
     * Input validation background color for error severity.
     */
    "inputValidation.errorBackground": null | ThemeNames;
    /**
     * Input validation border color for error severity.
     */
    "inputValidation.errorBorder": null | ThemeNames;
    /**
     * Input validation foreground color for error severity.
     */
    "inputValidation.errorForeground": null | ThemeNames;
    /**
     * Input validation background color for information severity.
     */
    "inputValidation.infoBackground": null | ThemeNames;
    /**
     * Input validation border color for information severity.
     */
    "inputValidation.infoBorder": null | ThemeNames;
    /**
     * Input validation foreground color for information severity.
     */
    "inputValidation.infoForeground": null | ThemeNames;
    /**
     * Input validation background color for warning severity.
     */
    "inputValidation.warningBackground": null | ThemeNames;
    /**
     * Input validation border color for warning severity.
     */
    "inputValidation.warningBorder": null | ThemeNames;
    /**
     * Input validation foreground color for warning severity.
     */
    "inputValidation.warningForeground": null | ThemeNames;
    /**
     * The border color for the current interactive code cell when the editor has focus.
     */
    "interactive.activeCodeBorder": null | ThemeNames;
    /**
     * The border color for the current interactive code cell when the editor does not have
     * focus.
     */
    "interactive.inactiveCodeBorder": null | ThemeNames;
    /**
     * Keybinding label background color. The keybinding label is used to represent a keyboard
     * shortcut.
     */
    "keybindingLabel.background": null | ThemeNames;
    /**
     * Keybinding label border color. The keybinding label is used to represent a keyboard
     * shortcut.
     */
    "keybindingLabel.border": null | ThemeNames;
    /**
     * Keybinding label border bottom color. The keybinding label is used to represent a
     * keyboard shortcut.
     */
    "keybindingLabel.bottomBorder": null | ThemeNames;
    /**
     * Keybinding label foreground color. The keybinding label is used to represent a keyboard
     * shortcut.
     */
    "keybindingLabel.foreground": null | ThemeNames;
    /**
     * Background color for the keyboard shortcuts table header.
     */
    "keybindingTable.headerBackground": null | ThemeNames;
    /**
     * Background color for the keyboard shortcuts table alternating rows.
     */
    "keybindingTable.rowsBackground": null | ThemeNames;
    /**
     * List/Tree background color for the selected item when the list/tree is active. An active
     * list/tree has keyboard focus, an inactive does not.
     */
    "list.activeSelectionBackground": null | ThemeNames;
    /**
     * List/Tree foreground color for the selected item when the list/tree is active. An active
     * list/tree has keyboard focus, an inactive does not.
     */
    "list.activeSelectionForeground": null | ThemeNames;
    /**
     * List/Tree icon foreground color for the selected item when the list/tree is active. An
     * active list/tree has keyboard focus, an inactive does not.
     */
    "list.activeSelectionIconForeground": null | ThemeNames;
    /**
     * List/Tree foreground color for items that are deemphasized.
     */
    "list.deemphasizedForeground": null | ThemeNames;
    /**
     * List/Tree drag and drop background when moving items around using the mouse.
     */
    "list.dropBackground": null | ThemeNames;
    /**
     * Foreground color of list items containing errors.
     */
    "list.errorForeground": null | ThemeNames;
    /**
     * Background color of the filtered match.
     */
    "list.filterMatchBackground": null | ThemeNames;
    /**
     * Border color of the filtered match.
     */
    "list.filterMatchBorder": null | ThemeNames;
    /**
     * List/Tree outline color for the focused item when the list/tree is active and selected.
     * An active list/tree has keyboard focus, an inactive does not.
     */
    "list.focusAndSelectionOutline": null | ThemeNames;
    /**
     * List/Tree background color for the focused item when the list/tree is active. An active
     * list/tree has keyboard focus, an inactive does not.
     */
    "list.focusBackground": null | ThemeNames;
    /**
     * List/Tree foreground color for the focused item when the list/tree is active. An active
     * list/tree has keyboard focus, an inactive does not.
     */
    "list.focusForeground": null | ThemeNames;
    /**
     * List/Tree foreground color of the match highlights on actively focused items when
     * searching inside the list/tree.
     */
    "list.focusHighlightForeground": null | ThemeNames;
    /**
     * List/Tree outline color for the focused item when the list/tree is active. An active
     * list/tree has keyboard focus, an inactive does not.
     */
    "list.focusOutline": null | ThemeNames;
    /**
     * List/Tree foreground color of the match highlights when searching inside the list/tree.
     */
    "list.highlightForeground": null | ThemeNames;
    /**
     * List/Tree background when hovering over items using the mouse.
     */
    "list.hoverBackground": null | ThemeNames;
    /**
     * List/Tree foreground when hovering over items using the mouse.
     */
    "list.hoverForeground": null | ThemeNames;
    /**
     * List/Tree background color for the focused item when the list/tree is inactive. An active
     * list/tree has keyboard focus, an inactive does not.
     */
    "list.inactiveFocusBackground": null | ThemeNames;
    /**
     * List/Tree outline color for the focused item when the list/tree is inactive. An active
     * list/tree has keyboard focus, an inactive does not.
     */
    "list.inactiveFocusOutline": null | ThemeNames;
    /**
     * List/Tree background color for the selected item when the list/tree is inactive. An
     * active list/tree has keyboard focus, an inactive does not.
     */
    "list.inactiveSelectionBackground": null | ThemeNames;
    /**
     * List/Tree foreground color for the selected item when the list/tree is inactive. An
     * active list/tree has keyboard focus, an inactive does not.
     */
    "list.inactiveSelectionForeground": null | ThemeNames;
    /**
     * List/Tree icon foreground color for the selected item when the list/tree is inactive. An
     * active list/tree has keyboard focus, an inactive does not.
     */
    "list.inactiveSelectionIconForeground": null | ThemeNames;
    /**
     * List/Tree foreground color for invalid items, for example an unresolved root in explorer.
     */
    "list.invalidItemForeground": null | ThemeNames;
    /**
     * Foreground color of list items containing warnings.
     */
    "list.warningForeground": null | ThemeNames;
    /**
     * Background color of the type filter widget in lists and trees.
     */
    "listFilterWidget.background": null | ThemeNames;
    /**
     * Outline color of the type filter widget in lists and trees, when there are no matches.
     */
    "listFilterWidget.noMatchesOutline": null | ThemeNames;
    /**
     * Outline color of the type filter widget in lists and trees.
     */
    "listFilterWidget.outline": null | ThemeNames;
    /**
     * Shadow color of the type filter widget in lists and trees.
     */
    "listFilterWidget.shadow": null | ThemeNames;
    /**
     * Background color of menu items.
     */
    "menu.background": null | ThemeNames;
    /**
     * Border color of menus.
     */
    "menu.border": null | ThemeNames;
    /**
     * Foreground color of menu items.
     */
    "menu.foreground": null | ThemeNames;
    /**
     * Background color of the selected menu item in menus.
     */
    "menu.selectionBackground": null | ThemeNames;
    /**
     * Border color of the selected menu item in menus.
     */
    "menu.selectionBorder": null | ThemeNames;
    /**
     * Foreground color of the selected menu item in menus.
     */
    "menu.selectionForeground": null | ThemeNames;
    /**
     * Color of a separator menu item in menus.
     */
    "menu.separatorBackground": null | ThemeNames;
    /**
     * Background color of the selected menu item in the menubar.
     */
    "menubar.selectionBackground": null | ThemeNames;
    /**
     * Border color of the selected menu item in the menubar.
     */
    "menubar.selectionBorder": null | ThemeNames;
    /**
     * Foreground color of the selected menu item in the menubar.
     */
    "menubar.selectionForeground": null | ThemeNames;
    /**
     * Border color on headers and the splitter in inline merge-conflicts.
     */
    "merge.border": null | ThemeNames;
    /**
     * Common ancestor content background in inline merge-conflicts. The color must not be
     * opaque so as not to hide underlying decorations.
     */
    "merge.commonContentBackground": null | ThemeNames;
    /**
     * Common ancestor header background in inline merge-conflicts. The color must not be opaque
     * so as not to hide underlying decorations.
     */
    "merge.commonHeaderBackground": null | ThemeNames;
    /**
     * Current content background in inline merge-conflicts. The color must not be opaque so as
     * not to hide underlying decorations.
     */
    "merge.currentContentBackground": null | ThemeNames;
    /**
     * Current header background in inline merge-conflicts. The color must not be opaque so as
     * not to hide underlying decorations.
     */
    "merge.currentHeaderBackground": null | ThemeNames;
    /**
     * Incoming content background in inline merge-conflicts. The color must not be opaque so as
     * not to hide underlying decorations.
     */
    "merge.incomingContentBackground": null | ThemeNames;
    /**
     * Incoming header background in inline merge-conflicts. The color must not be opaque so as
     * not to hide underlying decorations.
     */
    "merge.incomingHeaderBackground": null | ThemeNames;
    /**
     * The background color for changes.
     */
    "mergeEditor.change.background": null | ThemeNames;
    /**
     * The background color for word changes.
     */
    "mergeEditor.change.word.background": null | ThemeNames;
    /**
     * The background color for changes in base.
     */
    "mergeEditor.changeBase.background": null | ThemeNames;
    /**
     * The background color for word changes in base.
     */
    "mergeEditor.changeBase.word.background": null | ThemeNames;
    /**
     * The foreground color for changes in input 1.
     */
    "mergeEditor.conflict.handled.minimapOverViewRuler": null | ThemeNames;
    /**
     * The border color of handled focused conflicts.
     */
    "mergeEditor.conflict.handledFocused.border": null | ThemeNames;
    /**
     * The border color of handled unfocused conflicts.
     */
    "mergeEditor.conflict.handledUnfocused.border": null | ThemeNames;
    /**
     * The background color of decorations in input 1.
     */
    "mergeEditor.conflict.input1.background": null | ThemeNames;
    /**
     * The background color of decorations in input 2.
     */
    "mergeEditor.conflict.input2.background": null | ThemeNames;
    /**
     * The foreground color for changes in input 1.
     */
    "mergeEditor.conflict.unhandled.minimapOverViewRuler": null | ThemeNames;
    /**
     * The border color of unhandled focused conflicts.
     */
    "mergeEditor.conflict.unhandledFocused.border": null | ThemeNames;
    /**
     * The border color of unhandled unfocused conflicts.
     */
    "mergeEditor.conflict.unhandledUnfocused.border": null | ThemeNames;
    /**
     * The background of the "Conflicting Lines" text.
     */
    "mergeEditor.conflictingLines.background": null | ThemeNames;
    /**
     * Minimap background color.
     */
    "minimap.background": null | ThemeNames;
    /**
     * Minimap marker color for errors.
     */
    "minimap.errorHighlight": null | ThemeNames;
    /**
     * Minimap marker color for find matches.
     */
    "minimap.findMatchHighlight": null | ThemeNames;
    /**
     * Opacity of foreground elements rendered in the minimap. For example,null|string;
     * render the elements with 75% opacity.
     */
    "minimap.foregroundOpacity": null | ThemeNames;
    /**
     * Minimap marker color for the editor selection.
     */
    "minimap.selectionHighlight": null | ThemeNames;
    /**
     * Minimap marker color for repeating editor selections.
     */
    "minimap.selectionOccurrenceHighlight": null | ThemeNames;
    /**
     * Minimap marker color for warnings.
     */
    "minimap.warningHighlight": null | ThemeNames;
    /**
     * Minimap marker color for infos.
     */
    "minimap.infoHighlight": null | ThemeNames;
    /**
     * Minimap gutter background color for lines that are added.
     */
    "minimapGutter.addedBackground": null | ThemeNames;
    /**
     * Minimap gutter background color for lines that are deleted.
     */
    "minimapGutter.deletedBackground": null | ThemeNames;
    /**
     * Minimap gutter background color for lines that are modified.
     */
    "minimapGutter.modifiedBackground": null | ThemeNames;
    /**
     * Minimap slider background color when clicked on.
     */
    "minimapSlider.activeBackground": null | ThemeNames;
    /**
     * Minimap slider background color.
     */
    "minimapSlider.background": null | ThemeNames;
    /**
     * Minimap slider background color when hovering.
     */
    "minimapSlider.hoverBackground": null | ThemeNames;
    /**
     * The border color for notebook cells.
     */
    "notebook.cellBorderColor": null | ThemeNames;
    /**
     * Cell editor background color.
     */
    "notebook.cellEditorBackground": null | ThemeNames;
    /**
     * The background color of a cell when the cell is hovered.
     */
    "notebook.cellHoverBackground": null | ThemeNames;
    /**
     * The color of the notebook cell insertion indicator.
     */
    "notebook.cellInsertionIndicator": null | ThemeNames;
    /**
     * The background color of notebook cell status bar items.
     */
    "notebook.cellStatusBarItemHoverBackground": null | ThemeNames;
    /**
     * The color of the separator in the cell bottom toolbar
     */
    "notebook.cellToolbarSeparator": null | ThemeNames;
    /**
     * Notebook background color.
     */
    "notebook.editorBackground": null | ThemeNames;
    /**
     * The background color of a cell when the cell is focused.
     */
    "notebook.focusedCellBackground": null | ThemeNames;
    /**
     * The color of the cell's focus indicator borders when the cell is focused.
     */
    "notebook.focusedCellBorder": null | ThemeNames;
    /**
     * The color of the notebook cell editor border.
     */
    "notebook.focusedEditorBorder": null | ThemeNames;
    /**
     * The color of the cell's top and bottom border when a cell is focused while the primary
     * focus is outside of the editor.
     */
    "notebook.inactiveFocusedCellBorder": null | ThemeNames;
    /**
     * The color of the cell's borders when multiple cells are selected.
     */
    "notebook.inactiveSelectedCellBorder": null | ThemeNames;
    /**
     * The color of the notebook output container background.
     */
    "notebook.outputContainerBackgroundColor": null | ThemeNames;
    /**
     * The border color of the notebook output container.
     */
    "notebook.outputContainerBorderColor": null | ThemeNames;
    /**
     * The background color of a cell when the cell is selected.
     */
    "notebook.selectedCellBackground": null | ThemeNames;
    /**
     * The color of the cell's top and bottom border when the cell is selected but not focused.
     */
    "notebook.selectedCellBorder": null | ThemeNames;
    /**
     * Background color of highlighted cell
     */
    "notebook.symbolHighlightBackground": null | ThemeNames;
    /**
     * The color of the running cell decoration in the notebook editor overview ruler.
     */
    "notebookEditorOverviewRuler.runningCellForeground": null | ThemeNames;
    /**
     * Notebook scrollbar slider background color when clicked on.
     */
    "notebookScrollbarSlider.activeBackground": null | ThemeNames;
    /**
     * Notebook scrollbar slider background color.
     */
    "notebookScrollbarSlider.background": null | ThemeNames;
    /**
     * Notebook scrollbar slider background color when hovering.
     */
    "notebookScrollbarSlider.hoverBackground": null | ThemeNames;
    /**
     * The error icon color of notebook cells in the cell status bar.
     */
    "notebookStatusErrorIcon.foreground": null | ThemeNames;
    /**
     * The running icon color of notebook cells in the cell status bar.
     */
    "notebookStatusRunningIcon.foreground": null | ThemeNames;
    /**
     * The error icon color of notebook cells in the cell status bar.
     */
    "notebookStatusSuccessIcon.foreground": null | ThemeNames;
    /**
     * Notifications center border color. Notifications slide in from the bottom right of the
     * window.
     */
    "notificationCenter.border": null | ThemeNames;
    /**
     * Notifications center header background color. Notifications slide in from the bottom
     * right of the window.
     */
    "notificationCenterHeader.background": null | ThemeNames;
    /**
     * Notifications center header foreground color. Notifications slide in from the bottom
     * right of the window.
     */
    "notificationCenterHeader.foreground": null | ThemeNames;
    /**
     * Notification links foreground color. Notifications slide in from the bottom right of the
     * window.
     */
    "notificationLink.foreground": null | ThemeNames;
    /**
     * Notifications background color. Notifications slide in from the bottom right of the
     * window.
     */
    "notifications.background": null | ThemeNames;
    /**
     * Notifications border color separating from other notifications in the notifications
     * center. Notifications slide in from the bottom right of the window.
     */
    "notifications.border": null | ThemeNames;
    /**
     * Notifications foreground color. Notifications slide in from the bottom right of the
     * window.
     */
    "notifications.foreground": null | ThemeNames;
    /**
     * The color used for the icon of error notifications. Notifications slide in from the
     * bottom right of the window.
     */
    "notificationsErrorIcon.foreground": null | ThemeNames;
    /**
     * The color used for the icon of info notifications. Notifications slide in from the bottom
     * right of the window.
     */
    "notificationsInfoIcon.foreground": null | ThemeNames;
    /**
     * The color used for the icon of warning notifications. Notifications slide in from the
     * bottom right of the window.
     */
    "notificationsWarningIcon.foreground": null | ThemeNames;
    /**
     * Notification toast border color. Notifications slide in from the bottom right of the
     * window.
     */
    "notificationToast.border": null | ThemeNames;
    /**
     * Panel background color. Panels are shown below the editor area and contain views like
     * output and integrated terminal.
     */
    "panel.background": null | ThemeNames;
    /**
     * Panel border color to separate the panel from the editor. Panels are shown below the
     * editor area and contain views like output and integrated terminal.
     */
    "panel.border": null | ThemeNames;
    /**
     * Drag and drop feedback color for the panel titles. Panels are shown below the editor area
     * and contain views like output and integrated terminal.
     */
    "panel.dropBorder": null | ThemeNames;
    /**
     * Input box border for inputs in the panel.
     */
    "panelInput.border": null | ThemeNames;
    /**
     * Panel section border color used when multiple views are stacked horizontally in the
     * panel. Panels are shown below the editor area and contain views like output and
     * integrated terminal. Panel sections are views nested within the panels.
     */
    "panelSection.border": null | ThemeNames;
    /**
     * Drag and drop feedback color for the panel sections. The color should have transparency
     * so that the panel sections can still shine through. Panels are shown below the editor
     * area and contain views like output and integrated terminal. Panel sections are views
     * nested within the panels.
     */
    "panelSection.dropBackground": null | ThemeNames;
    /**
     * Panel section header background color. Panels are shown below the editor area and contain
     * views like output and integrated terminal. Panel sections are views nested within the
     * panels.
     */
    "panelSectionHeader.background": null | ThemeNames;
    /**
     * Panel section header border color used when multiple views are stacked vertically in the
     * panel. Panels are shown below the editor area and contain views like output and
     * integrated terminal. Panel sections are views nested within the panels.
     */
    "panelSectionHeader.border": null | ThemeNames;
    /**
     * Panel section header foreground color. Panels are shown below the editor area and contain
     * views like output and integrated terminal. Panel sections are views nested within the
     * panels.
     */
    "panelSectionHeader.foreground": null | ThemeNames;
    /**
     * Border color for the active panel title. Panels are shown below the editor area and
     * contain views like output and integrated terminal.
     */
    "panelTitle.activeBorder": null | ThemeNames;
    /**
     * Title color for the active panel. Panels are shown below the editor area and contain
     * views like output and integrated terminal.
     */
    "panelTitle.activeForeground": null | ThemeNames;
    /**
     * Title color for the inactive panel. Panels are shown below the editor area and contain
     * views like output and integrated terminal.
     */
    "panelTitle.inactiveForeground": null | ThemeNames;
    /**
     * Color of the peek view borders and arrow.
     */
    "peekView.border": null | ThemeNames;
    /**
     * Background color of the peek view editor.
     */
    "peekViewEditor.background": null | ThemeNames;
    /**
     * Match highlight color in the peek view editor.
     */
    "peekViewEditor.matchHighlightBackground": null | ThemeNames;
    /**
     * Match highlight border in the peek view editor.
     */
    "peekViewEditor.matchHighlightBorder": null | ThemeNames;
    /**
     * Background color of the gutter in the peek view editor.
     */
    "peekViewEditorGutter.background": null | ThemeNames;
    /**
     * Background color of sticky scroll in the peek view editor.
     */
    "peekViewEditorStickyScroll.background": null | ThemeNames;
    /**
     * Background color of the peek view result list.
     */
    "peekViewResult.background": null | ThemeNames;
    /**
     * Foreground color for file nodes in the peek view result list.
     */
    "peekViewResult.fileForeground": null | ThemeNames;
    /**
     * Foreground color for line nodes in the peek view result list.
     */
    "peekViewResult.lineForeground": null | ThemeNames;
    /**
     * Match highlight color in the peek view result list.
     */
    "peekViewResult.matchHighlightBackground": null | ThemeNames;
    /**
     * Background color of the selected entry in the peek view result list.
     */
    "peekViewResult.selectionBackground": null | ThemeNames;
    /**
     * Foreground color of the selected entry in the peek view result list.
     */
    "peekViewResult.selectionForeground": null | ThemeNames;
    /**
     * Background color of the peek view title area.
     */
    "peekViewTitle.background": null | ThemeNames;
    /**
     * Color of the peek view title info.
     */
    "peekViewTitleDescription.foreground": null | ThemeNames;
    /**
     * Color of the peek view title.
     */
    "peekViewTitleLabel.foreground": null | ThemeNames;
    /**
     * Quick picker color for grouping borders.
     */
    "pickerGroup.border": null | ThemeNames;
    /**
     * Quick picker color for grouping labels.
     */
    "pickerGroup.foreground": null | ThemeNames;
    /**
     * The color of the icon for a port that has an associated running process.
     */
    "ports.iconRunningProcessForeground": null | ThemeNames;
    /**
     * The color used for the problems error icon.
     */
    "problemsErrorIcon.foreground": null | ThemeNames;
    /**
     * The color used for the problems info icon.
     */
    "problemsInfoIcon.foreground": null | ThemeNames;
    /**
     * The color used for the problems warning icon.
     */
    "problemsWarningIcon.foreground": null | ThemeNames;
    /**
     * Profile badge background color. The profile badge shows on top of the settings gear icon
     * in the activity bar.
     */
    "profileBadge.background": null | ThemeNames;
    /**
     * Profile badge foreground color. The profile badge shows on top of the settings gear icon
     * in the activity bar.
     */
    "profileBadge.foreground": null | ThemeNames;
    /**
     * Background color of the progress bar that can show for long running operations.
     */
    "progressBar.background": null | ThemeNames;
    /**
     * Quick picker background color. The quick picker widget is the container for pickers like
     * the command palette.
     */
    "quickInput.background": null | ThemeNames;
    /**
     * Quick picker foreground color. The quick picker widget is the container for pickers like
     * the command palette.
     */
    "quickInput.foreground": null | ThemeNames;
    "quickInput.list.focusBackground": null | ThemeNames;
    /**
     * Quick picker background color for the focused item.
     */
    "quickInputList.focusBackground": null | ThemeNames;
    /**
     * Quick picker foreground color for the focused item.
     */
    "quickInputList.focusForeground": null | ThemeNames;
    /**
     * Quick picker icon foreground color for the focused item.
     */
    "quickInputList.focusIconForeground": null | ThemeNames;
    /**
     * Quick picker title background color. The quick picker widget is the container for pickers
     * like the command palette.
     */
    "quickInputTitle.background": null | ThemeNames;
    /**
     * Border color of active sashes.
     */
    "sash.hoverBorder": null | ThemeNames;
    /**
     * SCM Provider separator border.
     */
    "scm.providerBorder": null | ThemeNames;
    /**
     * Scrollbar shadow to indicate that the view is scrolled.
     */
    "scrollbar.shadow": null | ThemeNames;
    /**
     * Scrollbar slider background color when clicked on.
     */
    "scrollbarSlider.activeBackground": null | ThemeNames;
    /**
     * Scrollbar slider background color.
     */
    "scrollbarSlider.background": null | ThemeNames;
    /**
     * Scrollbar slider background color when hovering.
     */
    "scrollbarSlider.hoverBackground": null | ThemeNames;
    /**
     * Color of the text in the search viewlet's completion message.
     */
    "search.resultsInfoForeground": null | ThemeNames;
    /**
     * Color of the Search Editor query matches.
     */
    "searchEditor.findMatchBackground": null | ThemeNames;
    /**
     * Border color of the Search Editor query matches.
     */
    "searchEditor.findMatchBorder": null | ThemeNames;
    /**
     * Search editor text input box border.
     */
    "searchEditor.textInputBorder": null | ThemeNames;
    /**
     * The background color of text selections in the workbench (e.g. for input fields or text
     * areas). Note that this does not apply to selections within the editor.
     */
    "selection.background": null | ThemeNames;
    /**
     * Settings editor checkbox background.
     */
    "settings.checkboxBackground": null | ThemeNames;
    /**
     * Settings editor checkbox border.
     */
    "settings.checkboxBorder": null | ThemeNames;
    /**
     * Settings editor checkbox foreground.
     */
    "settings.checkboxForeground": null | ThemeNames;
    /**
     * Settings editor dropdown background.
     */
    "settings.dropdownBackground": null | ThemeNames;
    /**
     * Settings editor dropdown border.
     */
    "settings.dropdownBorder": null | ThemeNames;
    /**
     * Settings editor dropdown foreground.
     */
    "settings.dropdownForeground": null | ThemeNames;
    /**
     * Settings editor dropdown list border. This surrounds the options and separates the
     * options from the description.
     */
    "settings.dropdownListBorder": null | ThemeNames;
    /**
     * The background color of a settings row when focused.
     */
    "settings.focusedRowBackground": null | ThemeNames;
    /**
     * The color of the row's top and bottom border when the row is focused.
     */
    "settings.focusedRowBorder": null | ThemeNames;
    /**
     * The color of the header container border.
     */
    "settings.headerBorder": null | ThemeNames;
    /**
     * The foreground color for a section header or active title.
     */
    "settings.headerForeground": null | ThemeNames;
    /**
     * The color of the modified setting indicator.
     */
    "settings.modifiedItemIndicator": null | ThemeNames;
    /**
     * Settings editor number input box background.
     */
    "settings.numberInputBackground": null | ThemeNames;
    /**
     * Settings editor number input box border.
     */
    "settings.numberInputBorder": null | ThemeNames;
    /**
     * Settings editor number input box foreground.
     */
    "settings.numberInputForeground": null | ThemeNames;
    /**
     * The background color of a settings row when hovered.
     */
    "settings.rowHoverBackground": null | ThemeNames;
    /**
     * The color of the Settings editor splitview sash border.
     */
    "settings.sashBorder": null | ThemeNames;
    /**
     * The foreground color for a section header or hovered title.
     */
    "settings.settingsHeaderHoverForeground": null | ThemeNames;
    /**
     * Settings editor text input box background.
     */
    "settings.textInputBackground": null | ThemeNames;
    /**
     * Settings editor text input box border.
     */
    "settings.textInputBorder": null | ThemeNames;
    /**
     * Settings editor text input box foreground.
     */
    "settings.textInputForeground": null | ThemeNames;
    /**
     * Side bar background color. The side bar is the container for views like explorer and
     * search.
     */
    "sideBar.background": null | ThemeNames;
    /**
     * Side bar border color on the side separating to the editor. The side bar is the container
     * for views like explorer and search.
     */
    "sideBar.border": null | ThemeNames;
    /**
     * Drag and drop feedback color for the side bar sections. The color should have
     * transparency so that the side bar sections can still shine through. The side bar is the
     * container for views like explorer and search. Side bar sections are views nested within
     * the side bar.
     */
    "sideBar.dropBackground": null | ThemeNames;
    /**
     * Side bar foreground color. The side bar is the container for views like explorer and
     * search.
     */
    "sideBar.foreground": null | ThemeNames;
    /**
     * Side bar section header background color. The side bar is the container for views like
     * explorer and search. Side bar sections are views nested within the side bar.
     */
    "sideBarSectionHeader.background": null | ThemeNames;
    /**
     * Side bar section header border color. The side bar is the container for views like
     * explorer and search. Side bar sections are views nested within the side bar.
     */
    "sideBarSectionHeader.border": null | ThemeNames;
    /**
     * Side bar section header foreground color. The side bar is the container for views like
     * explorer and search. Side bar sections are views nested within the side bar.
     */
    "sideBarSectionHeader.foreground": null | ThemeNames;
    /**
     * Side bar title foreground color. The side bar is the container for views like explorer
     * and search.
     */
    "sideBarTitle.foreground": null | ThemeNames;
    /**
     * Color to separate two editors from each other when shown side by side in an editor group
     * from top to bottom.
     */
    "sideBySideEditor.horizontalBorder": null | ThemeNames;
    /**
     * Color to separate two editors from each other when shown side by side in an editor group
     * from left to right.
     */
    "sideBySideEditor.verticalBorder": null | ThemeNames;
    /**
     * Border color of the sash border.
     */
    "simpleFindWidget.sashBorder": null | ThemeNames;
    /**
     * Status bar background color when a workspace or folder is opened. The status bar is shown
     * in the bottom of the window.
     */
    "statusBar.background": null | ThemeNames;
    /**
     * Status bar border color separating to the sidebar and editor. The status bar is shown in
     * the bottom of the window.
     */
    "statusBar.border": null | ThemeNames;
    /**
     * Status bar background color when a program is being debugged. The status bar is shown in
     * the bottom of the window
     */
    "statusBar.debuggingBackground": null | ThemeNames;
    /**
     * Status bar border color separating to the sidebar and editor when a program is being
     * debugged. The status bar is shown in the bottom of the window
     */
    "statusBar.debuggingBorder": null | ThemeNames;
    /**
     * Status bar foreground color when a program is being debugged. The status bar is shown in
     * the bottom of the window
     */
    "statusBar.debuggingForeground": null | ThemeNames;
    /**
     * Status bar border color when focused on keyboard navigation. The status bar is shown in
     * the bottom of the window.
     */
    "statusBar.focusBorder": null | ThemeNames;
    /**
     * Status bar foreground color when a workspace or folder is opened. The status bar is shown
     * in the bottom of the window.
     */
    "statusBar.foreground": null | ThemeNames;
    /**
     * Status bar background color when no folder is opened. The status bar is shown in the
     * bottom of the window.
     */
    "statusBar.noFolderBackground": null | ThemeNames;
    /**
     * Status bar border color separating to the sidebar and editor when no folder is opened.
     * The status bar is shown in the bottom of the window.
     */
    "statusBar.noFolderBorder": null | ThemeNames;
    /**
     * Status bar foreground color when no folder is opened. The status bar is shown in the
     * bottom of the window.
     */
    "statusBar.noFolderForeground": null | ThemeNames;
    /**
     * Status bar item background color when clicking. The status bar is shown in the bottom of
     * the window.
     */
    "statusBarItem.activeBackground": null | ThemeNames;
    /**
     * Status bar item background color when hovering an item that contains two hovers. The
     * status bar is shown in the bottom of the window.
     */
    "statusBarItem.compactHoverBackground": null | ThemeNames;
    /**
     * Status bar error items background color. Error items stand out from other status bar
     * entries to indicate error conditions. The status bar is shown in the bottom of the window.
     */
    "statusBarItem.errorBackground": null | ThemeNames;
    /**
     * Status bar error items foreground color. Error items stand out from other status bar
     * entries to indicate error conditions. The status bar is shown in the bottom of the window.
     */
    "statusBarItem.errorForeground": null | ThemeNames;
    /**
     * Status bar error items background color when hovering. Error items stand out from other
     * status bar entries to indicate error conditions. The status bar is shown in the bottom of
     * the window.
     */
    "statusBarItem.errorHoverBackground": null | ThemeNames;
    /**
     * Status bar error items foreground color when hovering. Error items stand out from other
     * status bar entries to indicate error conditions. The status bar is shown in the bottom of
     * the window.
     */
    "statusBarItem.errorHoverForeground": null | ThemeNames;
    /**
     * Status bar item border color when focused on keyboard navigation. The status bar is shown
     * in the bottom of the window.
     */
    "statusBarItem.focusBorder": null | ThemeNames;
    /**
     * Status bar item background color when hovering. The status bar is shown in the bottom of
     * the window.
     */
    "statusBarItem.hoverBackground": null | ThemeNames;
    /**
     * Status bar item foreground color when hovering. The status bar is shown in the bottom of
     * the window.
     */
    "statusBarItem.hoverForeground": null | ThemeNames;
    /**
     * Status bar item background color when the workbench is offline.
     */
    "statusBarItem.offlineBackground": null | ThemeNames;
    /**
     * Status bar item foreground color when the workbench is offline.
     */
    "statusBarItem.offlineForeground": null | ThemeNames;
    /**
     * Status bar item background hover color when the workbench is offline.
     */
    "statusBarItem.offlineHoverBackground": null | ThemeNames;
    /**
     * Status bar item foreground hover color when the workbench is offline.
     */
    "statusBarItem.offlineHoverForeground": null | ThemeNames;
    /**
     * Status bar prominent items background color. Prominent items stand out from other status
     * bar entries to indicate importance. The status bar is shown in the bottom of the window.
     */
    "statusBarItem.prominentBackground": null | ThemeNames;
    /**
     * Status bar prominent items foreground color. Prominent items stand out from other status
     * bar entries to indicate importance. The status bar is shown in the bottom of the window.
     */
    "statusBarItem.prominentForeground": null | ThemeNames;
    /**
     * Status bar prominent items background color when hovering. Prominent items stand out from
     * other status bar entries to indicate importance. The status bar is shown in the bottom of
     * the window.
     */
    "statusBarItem.prominentHoverBackground": null | ThemeNames;
    /**
     * Status bar prominent items foreground color when hovering. Prominent items stand out from
     * other status bar entries to indicate importance. The status bar is shown in the bottom of
     * the window.
     */
    "statusBarItem.prominentHoverForeground": null | ThemeNames;
    /**
     * Background color for the remote indicator on the status bar.
     */
    "statusBarItem.remoteBackground": null | ThemeNames;
    /**
     * Foreground color for the remote indicator on the status bar.
     */
    "statusBarItem.remoteForeground": null | ThemeNames;
    /**
     * Background color for the remote indicator on the status bar when hovering.
     */
    "statusBarItem.remoteHoverBackground": null | ThemeNames;
    /**
     * Foreground color for the remote indicator on the status bar when hovering.
     */
    "statusBarItem.remoteHoverForeground": null | ThemeNames;
    /**
     * Status bar warning items background color. Warning items stand out from other status bar
     * entries to indicate warning conditions. The status bar is shown in the bottom of the
     * window.
     */
    "statusBarItem.warningBackground": null | ThemeNames;
    /**
     * Status bar warning items foreground color. Warning items stand out from other status bar
     * entries to indicate warning conditions. The status bar is shown in the bottom of the
     * window.
     */
    "statusBarItem.warningForeground": null | ThemeNames;
    /**
     * Status bar warning items background color when hovering. Warning items stand out from
     * other status bar entries to indicate warning conditions. The status bar is shown in the
     * bottom of the window.
     */
    "statusBarItem.warningHoverBackground": null | ThemeNames;
    /**
     * Status bar warning items foreground color when hovering. Warning items stand out from
     * other status bar entries to indicate warning conditions. The status bar is shown in the
     * bottom of the window.
     */
    "statusBarItem.warningHoverForeground": null | ThemeNames;
    /**
     * The foreground color for array symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.arrayForeground": null | ThemeNames;
    /**
     * The foreground color for boolean symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.booleanForeground": null | ThemeNames;
    /**
     * The foreground color for class symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.classForeground": null | ThemeNames;
    /**
     * The foreground color for color symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.colorForeground": null | ThemeNames;
    /**
     * The foreground color for constant symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.constantForeground": null | ThemeNames;
    /**
     * The foreground color for constructor symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.constructorForeground": null | ThemeNames;
    /**
     * The foreground color for enumerator symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.enumeratorForeground": null | ThemeNames;
    /**
     * The foreground color for enumerator member symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.enumeratorMemberForeground": null | ThemeNames;
    /**
     * The foreground color for event symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.eventForeground": null | ThemeNames;
    /**
     * The foreground color for field symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.fieldForeground": null | ThemeNames;
    /**
     * The foreground color for file symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.fileForeground": null | ThemeNames;
    /**
     * The foreground color for folder symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.folderForeground": null | ThemeNames;
    /**
     * The foreground color for function symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.functionForeground": null | ThemeNames;
    /**
     * The foreground color for interface symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.interfaceForeground": null | ThemeNames;
    /**
     * The foreground color for key symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.keyForeground": null | ThemeNames;
    /**
     * The foreground color for keyword symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.keywordForeground": null | ThemeNames;
    /**
     * The foreground color for method symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.methodForeground": null | ThemeNames;
    /**
     * The foreground color for module symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.moduleForeground": null | ThemeNames;
    /**
     * The foreground color for namespace symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.namespaceForeground": null | ThemeNames;
    /**
     * The foreground color for null symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.nullForeground": null | ThemeNames;
    /**
     * The foreground color for number symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.numberForeground": null | ThemeNames;
    /**
     * The foreground color for object symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.objectForeground": null | ThemeNames;
    /**
     * The foreground color for operator symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.operatorForeground": null | ThemeNames;
    /**
     * The foreground color for package symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.packageForeground": null | ThemeNames;
    /**
     * The foreground color for property symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.propertyForeground": null | ThemeNames;
    /**
     * The foreground color for reference symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.referenceForeground": null | ThemeNames;
    /**
     * The foreground color for snippet symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.snippetForeground": null | ThemeNames;
    /**
     * The foreground color for string symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.stringForeground": null | ThemeNames;
    /**
     * The foreground color for struct symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.structForeground": null | ThemeNames;
    /**
     * The foreground color for text symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.textForeground": null | ThemeNames;
    /**
     * The foreground color for type parameter symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.typeParameterForeground": null | ThemeNames;
    /**
     * The foreground color for unit symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.unitForeground": null | ThemeNames;
    /**
     * The foreground color for variable symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.variableForeground": null | ThemeNames;
    /**
     * Active tab background color in an active group. Tabs are the containers for editors in
     * the editor area. Multiple tabs can be opened in one editor group. There can be multiple
     * editor groups.
     */
    "tab.activeBackground": null | ThemeNames;
    /**
     * Border on the bottom of an active tab. Tabs are the containers for editors in the editor
     * area. Multiple tabs can be opened in one editor group. There can be multiple editor
     * groups.
     */
    "tab.activeBorder": null | ThemeNames;
    /**
     * Border to the top of an active tab. Tabs are the containers for editors in the editor
     * area. Multiple tabs can be opened in one editor group. There can be multiple editor
     * groups.
     */
    "tab.activeBorderTop": null | ThemeNames;
    /**
     * Active tab foreground color in an active group. Tabs are the containers for editors in
     * the editor area. Multiple tabs can be opened in one editor group. There can be multiple
     * editor groups.
     */
    "tab.activeForeground": null | ThemeNames;
    /**
     * Border on the top of modified active tabs in an active group. Tabs are the containers for
     * editors in the editor area. Multiple tabs can be opened in one editor group. There can be
     * multiple editor groups.
     */
    "tab.activeModifiedBorder": null | ThemeNames;
    /**
     * Border to separate tabs from each other. Tabs are the containers for editors in the
     * editor area. Multiple tabs can be opened in one editor group. There can be multiple
     * editor groups.
     */
    "tab.border": null | ThemeNames;
    /**
     * Tab background color when hovering. Tabs are the containers for editors in the editor
     * area. Multiple tabs can be opened in one editor group. There can be multiple editor
     * groups.
     */
    "tab.hoverBackground": null | ThemeNames;
    /**
     * Border to highlight tabs when hovering. Tabs are the containers for editors in the editor
     * area. Multiple tabs can be opened in one editor group. There can be multiple editor
     * groups.
     */
    "tab.hoverBorder": null | ThemeNames;
    /**
     * Tab foreground color when hovering. Tabs are the containers for editors in the editor
     * area. Multiple tabs can be opened in one editor group. There can be multiple editor
     * groups.
     */
    "tab.hoverForeground": null | ThemeNames;
    /**
     * Inactive tab background color in an active group. Tabs are the containers for editors in
     * the editor area. Multiple tabs can be opened in one editor group. There can be multiple
     * editor groups.
     */
    "tab.inactiveBackground": null | ThemeNames;
    /**
     * Inactive tab foreground color in an active group. Tabs are the containers for editors in
     * the editor area. Multiple tabs can be opened in one editor group. There can be multiple
     * editor groups.
     */
    "tab.inactiveForeground": null | ThemeNames;
    /**
     * Border on the top of modified inactive tabs in an active group. Tabs are the containers
     * for editors in the editor area. Multiple tabs can be opened in one editor group. There
     * can be multiple editor groups.
     */
    "tab.inactiveModifiedBorder": null | ThemeNames;
    /**
     * Border to separate pinned tabs from other tabs. Tabs are the containers for editors in
     * the editor area. Multiple tabs can be opened in one editor group. There can be multiple
     * editor groups.
     */
    "tab.lastPinnedBorder": null | ThemeNames;
    /**
     * Active tab background color in an unfocused group. Tabs are the containers for editors in
     * the editor area. Multiple tabs can be opened in one editor group. There can be multiple
     * editor groups.
     */
    "tab.unfocusedActiveBackground": null | ThemeNames;
    /**
     * Border on the bottom of an active tab in an unfocused group. Tabs are the containers for
     * editors in the editor area. Multiple tabs can be opened in one editor group. There can be
     * multiple editor groups.
     */
    "tab.unfocusedActiveBorder": null | ThemeNames;
    /**
     * Border to the top of an active tab in an unfocused group. Tabs are the containers for
     * editors in the editor area. Multiple tabs can be opened in one editor group. There can be
     * multiple editor groups.
     */
    "tab.unfocusedActiveBorderTop": null | ThemeNames;
    /**
     * Active tab foreground color in an unfocused group. Tabs are the containers for editors in
     * the editor area. Multiple tabs can be opened in one editor group. There can be multiple
     * editor groups.
     */
    "tab.unfocusedActiveForeground": null | ThemeNames;
    /**
     * Border on the top of modified active tabs in an unfocused group. Tabs are the containers
     * for editors in the editor area. Multiple tabs can be opened in one editor group. There
     * can be multiple editor groups.
     */
    "tab.unfocusedActiveModifiedBorder": null | ThemeNames;
    /**
     * Tab background color in an unfocused group when hovering. Tabs are the containers for
     * editors in the editor area. Multiple tabs can be opened in one editor group. There can be
     * multiple editor groups.
     */
    "tab.unfocusedHoverBackground": null | ThemeNames;
    /**
     * Border to highlight tabs in an unfocused group when hovering. Tabs are the containers for
     * editors in the editor area. Multiple tabs can be opened in one editor group. There can be
     * multiple editor groups.
     */
    "tab.unfocusedHoverBorder": null | ThemeNames;
    /**
     * Tab foreground color in an unfocused group when hovering. Tabs are the containers for
     * editors in the editor area. Multiple tabs can be opened in one editor group. There can be
     * multiple editor groups.
     */
    "tab.unfocusedHoverForeground": null | ThemeNames;
    /**
     * Inactive tab background color in an unfocused group. Tabs are the containers for editors
     * in the editor area. Multiple tabs can be opened in one editor group. There can be
     * multiple editor groups.
     */
    "tab.unfocusedInactiveBackground": null | ThemeNames;
    /**
     * Inactive tab foreground color in an unfocused group. Tabs are the containers for editors
     * in the editor area. Multiple tabs can be opened in one editor group. There can be
     * multiple editor groups.
     */
    "tab.unfocusedInactiveForeground": null | ThemeNames;
    /**
     * Border on the top of modified inactive tabs in an unfocused group. Tabs are the
     * containers for editors in the editor area. Multiple tabs can be opened in one editor
     * group. There can be multiple editor groups.
     */
    "tab.unfocusedInactiveModifiedBorder": null | ThemeNames;
    /**
     * 'Black' ANSI color in the terminal.
     */
    "terminal.ansiBlack": null | ThemeNames;
    /**
     * 'Blue' ANSI color in the terminal.
     */
    "terminal.ansiBlue": null | ThemeNames;
    /**
     * 'BrightBlack' ANSI color in the terminal.
     */
    "terminal.ansiBrightBlack": null | ThemeNames;
    /**
     * 'BrightBlue' ANSI color in the terminal.
     */
    "terminal.ansiBrightBlue": null | ThemeNames;
    /**
     * 'BrightCyan' ANSI color in the terminal.
     */
    "terminal.ansiBrightCyan": null | ThemeNames;
    /**
     * 'BrightGreen' ANSI color in the terminal.
     */
    "terminal.ansiBrightGreen": null | ThemeNames;
    /**
     * 'BrightMagenta' ANSI color in the terminal.
     */
    "terminal.ansiBrightMagenta": null | ThemeNames;
    /**
     * 'BrightRed' ANSI color in the terminal.
     */
    "terminal.ansiBrightRed": null | ThemeNames;
    /**
     * 'BrightWhite' ANSI color in the terminal.
     */
    "terminal.ansiBrightWhite": null | ThemeNames;
    /**
     * 'BrightYellow' ANSI color in the terminal.
     */
    "terminal.ansiBrightYellow": null | ThemeNames;
    /**
     * 'Cyan' ANSI color in the terminal.
     */
    "terminal.ansiCyan": null | ThemeNames;
    /**
     * 'Green' ANSI color in the terminal.
     */
    "terminal.ansiGreen": null | ThemeNames;
    /**
     * 'Magenta' ANSI color in the terminal.
     */
    "terminal.ansiMagenta": null | ThemeNames;
    /**
     * 'Red' ANSI color in the terminal.
     */
    "terminal.ansiRed": null | ThemeNames;
    /**
     * 'White' ANSI color in the terminal.
     */
    "terminal.ansiWhite": null | ThemeNames;
    /**
     * 'Yellow' ANSI color in the terminal.
     */
    "terminal.ansiYellow": null | ThemeNames;
    /**
     * The background color of the terminal, this allows coloring the terminal differently to
     * the panel.
     */
    "terminal.background": null | ThemeNames;
    /**
     * The color of the border that separates split panes within the terminal. This defaults to
     * panel.border.
     */
    "terminal.border": null | ThemeNames;
    /**
     * Background color when dragging on top of terminals. The color should have transparency so
     * that the terminal contents can still shine through.
     */
    "terminal.dropBackground": null | ThemeNames;
    /**
     * Color of the current search match in the terminal. The color must not be opaque so as not
     * to hide underlying terminal content.
     */
    "terminal.findMatchBackground": null | ThemeNames;
    /**
     * Border color of the current search match in the terminal.
     */
    "terminal.findMatchBorder": null | ThemeNames;
    /**
     * Color of the other search matches in the terminal. The color must not be opaque so as not
     * to hide underlying terminal content.
     */
    "terminal.findMatchHighlightBackground": null | ThemeNames;
    /**
     * Border color of the other search matches in the terminal.
     */
    "terminal.findMatchHighlightBorder": null | ThemeNames;
    /**
     * The foreground color of the terminal.
     */
    "terminal.foreground": null | ThemeNames;
    /**
     * Border color of the other search matches in the terminal.
     */
    "terminal.hoverHighlightBackground": null | ThemeNames;
    /**
     * The selection background color of the terminal when it does not have focus.
     */
    "terminal.inactiveSelectionBackground": null | ThemeNames;
    /**
     * The selection background color of the terminal.
     */
    "terminal.selectionBackground": null | ThemeNames;
    /**
     * The selection foreground color of the terminal. When this is null the selection
     * foreground will be retained and have the minimum contrast ratio feature applied.
     */
    "terminal.selectionForeground": null | ThemeNames;
    /**
     * Border on the side of the terminal tab in the panel. This defaults to tab.activeBorder.
     */
    "terminal.tab.activeBorder": null | ThemeNames;
    /**
     * The default terminal command decoration background color.
     */
    "terminalCommandDecoration.defaultBackground": null | ThemeNames;
    /**
     * The terminal command decoration background color for error commands.
     */
    "terminalCommandDecoration.errorBackground": null | ThemeNames;
    /**
     * The terminal command decoration background color for successful commands.
     */
    "terminalCommandDecoration.successBackground": null | ThemeNames;
    /**
     * The background color of the terminal cursor. Allows customizing the color of a character
     * overlapped by a block cursor.
     */
    "terminalCursor.background": null | ThemeNames;
    /**
     * The foreground color of the terminal cursor.
     */
    "terminalCursor.foreground": null | ThemeNames;
    /**
     * The overview ruler cursor color.
     */
    "terminalOverviewRuler.cursorForeground": null | ThemeNames;
    /**
     * Overview ruler marker color for find matches in the terminal.
     */
    "terminalOverviewRuler.findMatchForeground": null | ThemeNames;
    /**
     * Color for the 'Errored' icon in the test explorer.
     */
    "testing.iconErrored": null | ThemeNames;
    /**
     * Color for the 'failed' icon in the test explorer.
     */
    "testing.iconFailed": null | ThemeNames;
    /**
     * Color for the 'passed' icon in the test explorer.
     */
    "testing.iconPassed": null | ThemeNames;
    /**
     * Color for the 'Queued' icon in the test explorer.
     */
    "testing.iconQueued": null | ThemeNames;
    /**
     * Color for the 'Skipped' icon in the test explorer.
     */
    "testing.iconSkipped": null | ThemeNames;
    /**
     * Color for the 'Unset' icon in the test explorer.
     */
    "testing.iconUnset": null | ThemeNames;
    /**
     * Text color of test error messages shown inline in the editor.
     */
    "testing.message.error.decorationForeground": null | ThemeNames;
    /**
     * Margin color beside error messages shown inline in the editor.
     */
    "testing.message.error.lineBackground": null | ThemeNames;
    /**
     * Text color of test info messages shown inline in the editor.
     */
    "testing.message.info.decorationForeground": null | ThemeNames;
    /**
     * Margin color beside info messages shown inline in the editor.
     */
    "testing.message.info.lineBackground": null | ThemeNames;
    /**
     * Color of the peek view borders and arrow.
     */
    "testing.peekBorder": null | ThemeNames;
    /**
     * Color of the peek view borders and arrow.
     */
    "testing.peekHeaderBackground": null | ThemeNames;
    /**
     * Color for 'run' icons in the editor.
     */
    "testing.runAction": null | ThemeNames;
    /**
     * Background color for block quotes in text.
     */
    "textBlockQuote.background": null | ThemeNames;
    /**
     * Border color for block quotes in text.
     */
    "textBlockQuote.border": null | ThemeNames;
    /**
     * Background color for code blocks in text.
     */
    "textCodeBlock.background": null | ThemeNames;
    /**
     * Foreground color for links in text when clicked on and on mouse hover.
     */
    "textLink.activeForeground": null | ThemeNames;
    /**
     * Foreground color for links in text.
     */
    "textLink.foreground": null | ThemeNames;
    /**
     * Foreground color for preformatted text segments.
     */
    "textPreformat.foreground": null | ThemeNames;
    /**
     * Color for text separators.
     */
    "textSeparator.foreground": null | ThemeNames;
    /**
     * Title bar background when the window is active.
     */
    "titleBar.activeBackground": null | ThemeNames;
    /**
     * Title bar foreground when the window is active.
     */
    "titleBar.activeForeground": null | ThemeNames;
    /**
     * Title bar border color.
     */
    "titleBar.border": null | ThemeNames;
    /**
     * Title bar background when the window is inactive.
     */
    "titleBar.inactiveBackground": null | ThemeNames;
    /**
     * Title bar foreground when the window is inactive.
     */
    "titleBar.inactiveForeground": null | ThemeNames;
    /**
     * Toolbar background when holding the mouse over actions
     */
    "toolbar.activeBackground": null | ThemeNames;
    /**
     * Toolbar background when hovering over actions using the mouse
     */
    "toolbar.hoverBackground": null | ThemeNames;
    /**
     * Toolbar outline when hovering over actions using the mouse
     */
    "toolbar.hoverOutline": null | ThemeNames;
    /**
     * Tree stroke color for the indentation guides that are not active.
     */
    "tree.inactiveIndentGuidesStroke": null | ThemeNames;
    /**
     * Tree stroke color for the indentation guides.
     */
    "tree.indentGuidesStroke": null | ThemeNames;
    /**
     * Table border color between columns.
     */
    "tree.tableColumnsBorder": null | ThemeNames;
    /**
     * Background color for odd table rows.
     */
    "tree.tableOddRowsBackground": null | ThemeNames;
    /**
     * Background color for the embedded editors on the Interactive Playground.
     */
    "walkThrough.embeddedEditorBackground": null | ThemeNames;
    /**
     * Foreground color of the heading of each walkthrough step
     */
    "walkthrough.stepTitle.foreground": null | ThemeNames;
    /**
     * Background color for the Welcome page.
     */
    "welcomePage.background": null | ThemeNames;
    /**
     * Foreground color for the Welcome page progress bars.
     */
    "welcomePage.progress.background": null | ThemeNames;
    /**
     * Background color for the Welcome page progress bars.
     */
    "welcomePage.progress.foreground": null | ThemeNames;
    /**
     * Background color for the tiles on the Welcome page.
     */
    "welcomePage.tileBackground": null | ThemeNames;
    /**
     * Border color for the tiles on the Welcome page.
     */
    "welcomePage.tileBorder": null | ThemeNames;
    /**
     * Hover background color for the tiles on the Welcome.
     */
    "welcomePage.tileHoverBackground": null | ThemeNames;
    /**
     * Border color of widgets such as find/replace inside the editor.
     */
    "widget.border": null | ThemeNames;
    /**
     * Shadow color of widgets such as find/replace inside the editor.
     */
    "widget.shadow": null | ThemeNames;
    /**
     * The color used for the border of the window when it is active. Only supported in the
     * macOS and Linux desktop client when using the custom title bar.
     */
    "window.activeBorder": null | ThemeNames;
    /**
     * The color used for the border of the window when it is inactive. Only supported in the
     * macOS and Linux desktop client when using the custom title bar.
     */
    "window.inactiveBorder": null | ThemeNames;

    "errorLens.errorBackground": null | ThemeNames;
    "errorLens.infoBackground": null | ThemeNames;
    "errorLens.warningBackground": null | ThemeNames;
    "errorLens.errorBackgroundLight": null | ThemeNames;
    "errorLens.errorForeground": null | ThemeNames;
    "errorLens.errorForegroundLight": null | ThemeNames;
    "errorLens.errorMessageBackground": null | ThemeNames;
    "errorLens.errorRangeBackground": null | ThemeNames;
    "errorLens.hintBackground": null | ThemeNames;
    "errorLens.hintBackgroundLight": null | ThemeNames;
    "errorLens.hintForeground": null | ThemeNames;
    "errorLens.hintForegroundLight": null | ThemeNames;
    "errorLens.hintMessageBackground": null | ThemeNames;
    "errorLens.hintRangeBackground": null | ThemeNames;
    "errorLens.infoBackgroundLight": null | ThemeNames;
    "errorLens.infoForeground": null | ThemeNames;
    "errorLens.infoForegroundLight": null | ThemeNames;
    "errorLens.infoMessageBackground": null | ThemeNames;
    "errorLens.infoRangeBackground": null | ThemeNames;
    "errorLens.statusBarErrorForeground": null | ThemeNames;
    "errorLens.statusBarHintForeground": null | ThemeNames;
    "errorLens.statusBarIconErrorForeground": null | ThemeNames;
    "errorLens.statusBarIconWarningForeground": null | ThemeNames;
    "errorLens.statusBarInfoForeground": null | ThemeNames;
    "errorLens.statusBarWarningForeground": null | ThemeNames;
    "errorLens.warningBackgroundLight": null | ThemeNames;
    "errorLens.warningForeground": null | ThemeNames;
    "errorLens.warningForegroundLight": null | ThemeNames;
    "errorLens.warningMessageBackground": null | ThemeNames;
    "errorLens.warningRangeBackground": null | ThemeNames;

    "issues.closed": null | ThemeNames;
    "issues.newIssueDecoration": null | ThemeNames;
    "issues.open": null | ThemeNames;
    "markdown.extension.editor.codeSpan.background": null | ThemeNames;
    "markdown.extension.editor.codeSpan.border": null | ThemeNames;
    "markdown.extension.editor.formattingMark.foreground": null | ThemeNames;
    "markdown.extension.editor.trailingSpace.background": null | ThemeNames;
    "pullRequests.closed": null | ThemeNames;
    "pullRequests.draft": null | ThemeNames;
    "pullRequests.merged": null | ThemeNames;
    "pullRequests.notification": null | ThemeNames;
    "pullRequests.open": null | ThemeNames;
}
