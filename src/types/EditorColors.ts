// https://github.com/wraith13/vscode-schemas/tree/master

import { ThemeNames } from "../Compile";

export type EditorColors = {
    /**
     * Background color for toggled action items in action bar.
     */
    "actionBar.toggledBackground": ThemeNames;
    /**
     * Activity bar background color for the active item. The activity bar is showing on the far
     * left or right and allows to switch between views of the side bar.
     */
    "activityBar.activeBackground": ThemeNames;
    /**
     * Activity bar border color for the active item. The activity bar is showing on the far
     * left or right and allows to switch between views of the side bar.
     */
    "activityBar.activeBorder": ThemeNames;
    /**
     * Activity bar focus border color for the active item. The activity bar is showing on the
     * far left or right and allows to switch between views of the side bar.
     */
    "activityBar.activeFocusBorder": ThemeNames;
    /**
     * Activity bar background color. The activity bar is showing on the far left or right and
     * allows to switch between views of the side bar.
     */
    "activityBar.background": ThemeNames;
    /**
     * Activity bar border color separating to the side bar. The activity bar is showing on the
     * far left or right and allows to switch between views of the side bar.
     */
    "activityBar.border": ThemeNames;
    /**
     * Drag and drop feedback color for the activity bar items. The activity bar is showing on
     * the far left or right and allows to switch between views of the side bar.
     */
    "activityBar.dropBorder": ThemeNames;
    /**
     * Activity bar item foreground color when it is active. The activity bar is showing on the
     * far left or right and allows to switch between views of the side bar.
     */
    "activityBar.foreground": ThemeNames;
    /**
     * Activity bar item foreground color when it is inactive. The activity bar is showing on
     * the far left or right and allows to switch between views of the side bar.
     */
    "activityBar.inactiveForeground": ThemeNames;
    /**
     * Activity notification badge background color. The activity bar is showing on the far left
     * or right and allows to switch between views of the side bar.
     */
    "activityBarBadge.background": ThemeNames;
    /**
     * Activity notification badge foreground color. The activity bar is showing on the far left
     * or right and allows to switch between views of the side bar.
     */
    "activityBarBadge.foreground": ThemeNames;
    /**
     * Badge background color. Badges are small information labels, e.g. for search results
     * count.
     */
    "badge.background": ThemeNames;
    /**
     * Badge foreground color. Badges are small information labels, e.g. for search results
     * count.
     */
    "badge.foreground": ThemeNames;
    /**
     * Banner background color. The banner is shown under the title bar of the window.
     */
    "banner.background": ThemeNames;
    /**
     * Banner foreground color. The banner is shown under the title bar of the window.
     */
    "banner.foreground": ThemeNames;
    /**
     * Banner icon color. The banner is shown under the title bar of the window.
     */
    "banner.iconForeground": ThemeNames;
    /**
     * Color of selected breadcrumb items.
     */
    "breadcrumb.activeSelectionForeground": ThemeNames;
    /**
     * Background color of breadcrumb items.
     */
    "breadcrumb.background": ThemeNames;
    /**
     * Color of focused breadcrumb items.
     */
    "breadcrumb.focusForeground": ThemeNames;
    /**
     * Color of focused breadcrumb items.
     */
    "breadcrumb.foreground": ThemeNames;
    /**
     * Background color of breadcrumb item picker.
     */
    "breadcrumbPicker.background": ThemeNames;
    /**
     * Button background color.
     */
    "button.background": ThemeNames;
    /**
     * Button border color.
     */
    "button.border": ThemeNames;
    /**
     * Button foreground color.
     */
    "button.foreground": ThemeNames;
    /**
     * Button background color when hovering.
     */
    "button.hoverBackground": ThemeNames;
    /**
     * Secondary button background color.
     */
    "button.secondaryBackground": ThemeNames;
    /**
     * Secondary button foreground color.
     */
    "button.secondaryForeground": ThemeNames;
    /**
     * Secondary button background color when hovering.
     */
    "button.secondaryHoverBackground": ThemeNames;
    /**
     * Button separator color.
     */
    "button.separator": ThemeNames;
    /**
     * The blue color used in chart visualizations.
     */
    "charts.blue": ThemeNames;
    /**
     * The foreground color used in charts.
     */
    "charts.foreground": ThemeNames;
    /**
     * The green color used in chart visualizations.
     */
    "charts.green": ThemeNames;
    /**
     * The color used for horizontal lines in charts.
     */
    "charts.lines": ThemeNames;
    /**
     * The orange color used in chart visualizations.
     */
    "charts.orange": ThemeNames;
    /**
     * The purple color used in chart visualizations.
     */
    "charts.purple": ThemeNames;
    /**
     * The red color used in chart visualizations.
     */
    "charts.red": ThemeNames;
    /**
     * The yellow color used in chart visualizations.
     */
    "charts.yellow": ThemeNames;
    /**
     * The border color of a chat request.
     */
    "chat.requestBorder": ThemeNames;
    /**
     * The background color of a chat slash command.
     */
    "chat.slashCommandBackground": ThemeNames;
    /**
     * The foreground color of a chat slash command.
     */
    "chat.slashCommandForeground": ThemeNames;
    /**
     * Background color of checkbox widget.
     */
    "checkbox.background": ThemeNames;
    /**
     * Border color of checkbox widget.
     */
    "checkbox.border": ThemeNames;
    /**
     * Foreground color of checkbox widget.
     */
    "checkbox.foreground": ThemeNames;
    /**
     * Background color of checkbox widget when the element it's in is selected.
     */
    "checkbox.selectBackground": ThemeNames;
    /**
     * Border color of checkbox widget when the element it's in is selected.
     */
    "checkbox.selectBorder": ThemeNames;
    /**
     * Active background color of the command center
     */
    "commandCenter.activeBackground": ThemeNames;
    /**
     * Command Center background color when a program is being debugged.
     */
    "commandCenter.activeBorder": ThemeNames;
    /**
    * Active border color of the command center
    */
    "commandCenter.debuggingBackground": ThemeNames;
    /**
     * Active foreground color of the command center
     */
    "commandCenter.activeForeground": ThemeNames;
    /**
     * Background color of the command center
     */
    "commandCenter.background": ThemeNames;
    /**
     * Border color of the command center
     */
    "commandCenter.border": ThemeNames;
    /**
     * Foreground color of the command center
     */
    "commandCenter.foreground": ThemeNames;
    /**
     * Border color of the command center when the window is inactive
     */
    "commandCenter.inactiveBorder": ThemeNames;
    /**
     * Foreground color of the command center when the window is inactive
     */
    "commandCenter.inactiveForeground": ThemeNames;
    /**
     * Icon color for resolved comments.
     */
    "commentsView.resolvedIcon": ThemeNames;
    /**
     * Icon color for unresolved comments.
     */
    "commentsView.unresolvedIcon": ThemeNames;
    /**
     * An extra border around active elements to separate them from others for greater contrast.
     */
    contrastActiveBorder?: ThemeNames;
    /**
     * An extra border around elements to separate them from others for greater contrast.
     */
    contrastBorder?: ThemeNames;
    /**
     * Foreground color for error messages in debug REPL console.
     */
    "debugConsole.errorForeground": ThemeNames;
    /**
     * Foreground color for info messages in debug REPL console.
     */
    "debugConsole.infoForeground": ThemeNames;
    /**
     * Foreground color for source filenames in debug REPL console.
     */
    "debugConsole.sourceForeground": ThemeNames;
    /**
     * Foreground color for warning messages in debug REPL console.
     */
    "debugConsole.warningForeground": ThemeNames;
    /**
     * Foreground color for debug console input marker icon.
     */
    "debugConsoleInputIcon.foreground": ThemeNames;
    /**
     * Exception widget background color.
     */
    "debugExceptionWidget.background": ThemeNames;
    /**
     * Exception widget border color.
     */
    "debugExceptionWidget.border": ThemeNames;
    /**
     * Icon color for the current breakpoint stack frame.
     */
    "debugIcon.breakpointCurrentStackframeForeground": ThemeNames;
    /**
     * Icon color for disabled breakpoints.
     */
    "debugIcon.breakpointDisabledForeground": ThemeNames;
    /**
     * Icon color for breakpoints.
     */
    "debugIcon.breakpointForeground": ThemeNames;
    /**
     * Icon color for all breakpoint stack frames.
     */
    "debugIcon.breakpointStackframeForeground": ThemeNames;
    /**
     * Icon color for unverified breakpoints.
     */
    "debugIcon.breakpointUnverifiedForeground": ThemeNames;
    /**
     * Debug toolbar icon for continue.
     */
    "debugIcon.continueForeground": ThemeNames;
    /**
     * Debug toolbar icon for disconnect.
     */
    "debugIcon.disconnectForeground": ThemeNames;
    /**
     * Debug toolbar icon for pause.
     */
    "debugIcon.pauseForeground": ThemeNames;
    /**
     * Debug toolbar icon for restart.
     */
    "debugIcon.restartForeground": ThemeNames;
    /**
     * Debug toolbar icon for start debugging.
     */
    "debugIcon.startForeground": ThemeNames;
    /**
     * Debug toolbar icon for step back.
     */
    "debugIcon.stepBackForeground": ThemeNames;
    /**
     * Debug toolbar icon for step into.
     */
    "debugIcon.stepIntoForeground": ThemeNames;
    /**
     * Debug toolbar icon for step over.
     */
    "debugIcon.stepOutForeground": ThemeNames;
    /**
     * Debug toolbar icon for step over.
     */
    "debugIcon.stepOverForeground": ThemeNames;
    /**
     * Debug toolbar icon for stop.
     */
    "debugIcon.stopForeground": ThemeNames;
    /**
     * Foreground color for booleans in the debug views (ie. the Variables or Watch view).
     */
    "debugTokenExpression.boolean": ThemeNames;
    /**
     * Foreground color for expression errors in the debug views (ie. the Variables or Watch
     * view) and for error logs shown in the debug console.
     */
    "debugTokenExpression.error": ThemeNames;
    /**
     * Foreground color for the token names shown in the debug views (ie. the Variables or Watch
     * view).
     */
    "debugTokenExpression.name": ThemeNames;
    /**
     * Foreground color for numbers in the debug views (ie. the Variables or Watch view).
     */
    "debugTokenExpression.number": ThemeNames;
    /**
     * Foreground color for strings in the debug views (ie. the Variables or Watch view).
     */
    "debugTokenExpression.string": ThemeNames;
    /**
     * Foreground color for the token values shown in the debug views (ie. the Variables or
     * Watch view).
     */
    "debugTokenExpression.value": ThemeNames;
    /**
     * Debug toolbar background color.
     */
    "debugToolBar.background": ThemeNames;
    /**
     * Debug toolbar border color.
     */
    "debugToolBar.border": ThemeNames;
    /**
     * Background color for a label shown in the CALL STACK view when the debugger breaks on an
     * exception.
     */
    "debugView.exceptionLabelBackground": ThemeNames;
    /**
     * Foreground color for a label shown in the CALL STACK view when the debugger breaks on an
     * exception.
     */
    "debugView.exceptionLabelForeground": ThemeNames;
    /**
     * Background color for a label in the CALL STACK view showing the current session's or
     * thread's state.
     */
    "debugView.stateLabelBackground": ThemeNames;
    /**
     * Foreground color for a label in the CALL STACK view showing the current session's or
     * thread's state.
     */
    "debugView.stateLabelForeground": ThemeNames;
    /**
     * Color used to highlight value changes in the debug views (ie. in the Variables view).
     */
    "debugView.valueChangedHighlight": ThemeNames;
    /**
     * Foreground color for description text providing additional information, for example for a
     * label.
     */
    descriptionForeground?: ThemeNames;
    /**
     * Border color between the two text editors.
     */
    "diffEditor.border": ThemeNames;
    /**
     * Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff
     * views.
     */
    "diffEditor.diagonalFill": ThemeNames;
    /**
     * Background color for lines that got inserted. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "diffEditor.insertedLineBackground": ThemeNames;
    /**
     * Background color for text that got inserted. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "diffEditor.insertedTextBackground": ThemeNames;
    /**
     * Outline color for the text that got inserted.
     */
    "diffEditor.insertedTextBorder": ThemeNames;
    /**
     * The border color for text that got moved in the diff editor.
     */
    "diffEditor.move.border": ThemeNames;
    /**
     * The active border color for text that got moved in the diff editor.
     */
    "diffEditor.moveActive.border": ThemeNames;
    /**
     * Background color for lines that got removed. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "diffEditor.removedLineBackground": ThemeNames;
    /**
     * Background color for text that got removed. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "diffEditor.removedTextBackground": ThemeNames;
    /**
     * Outline color for text that got removed.
     */
    "diffEditor.removedTextBorder": ThemeNames;
    /**
     * The background color of unchanged code in the diff editor.
     */
    "diffEditor.unchangedCodeBackground": ThemeNames;
    /**
     * The background color of unchanged blocks in the diff editor.
     */
    "diffEditor.unchangedRegionBackground": ThemeNames;
    /**
     * The foreground color of unchanged blocks in the diff editor.
     */
    "diffEditor.unchangedRegionForeground": ThemeNames;
    /**
     * Background color for the margin where lines got inserted.
     */
    "diffEditorGutter.insertedLineBackground": ThemeNames;
    /**
     * Background color for the margin where lines got removed.
     */
    "diffEditorGutter.removedLineBackground": ThemeNames;
    /**
     * Diff overview ruler foreground for inserted content.
     */
    "diffEditorOverview.insertedForeground": ThemeNames;
    /**
     * Diff overview ruler foreground for removed content.
     */
    "diffEditorOverview.removedForeground": ThemeNames;
    /**
     * Overall foreground for disabled elements. This color is only used if not overridden by a
     * component.
     */
    disabledForeground?: ThemeNames;
    /**
     * Dropdown background.
     */
    "dropdown.background": ThemeNames;
    /**
     * Dropdown border.
     */
    "dropdown.border": ThemeNames;
    /**
     * Dropdown foreground.
     */
    "dropdown.foreground": ThemeNames;
    /**
     * Dropdown list background.
     */
    "dropdown.listBackground": ThemeNames;
    /**
     * Editor background color.
     */
    "editor.background": ThemeNames;
    /**
     * Color of the current search match.
     */
    "editor.findMatchBackground": ThemeNames;
    /**
     * Border color of the current search match.
     */
    "editor.findMatchBorder": ThemeNames;
    /**
     * Color of the other search matches. The color must not be opaque so as not to hide
     * underlying decorations.
     */
    "editor.findMatchHighlightBackground": ThemeNames;
    /**
     * Border color of the other search matches.
     */
    "editor.findMatchHighlightBorder": ThemeNames;
    /**
     * Color of the range limiting the search. The color must not be opaque so as not to hide
     * underlying decorations.
     */
    "editor.findRangeHighlightBackground": ThemeNames;
    /**
     * Border color of the range limiting the search. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "editor.findRangeHighlightBorder": ThemeNames;
    /**
     * Background color for the highlight of line at focused stack frame position.
     */
    "editor.focusedStackFrameHighlightBackground": ThemeNames;
    /**
     * Background color behind folded ranges. The color must not be opaque so as not to hide
     * underlying decorations.
     */
    "editor.foldBackground": ThemeNames;
    /**
     * Editor default foreground color.
     */
    "editor.foreground": ThemeNames;
    /**
     * Highlight below the word for which a hover is shown. The color must not be opaque so as
     * not to hide underlying decorations.
     */
    "editor.hoverHighlightBackground": ThemeNames;
    /**
     * Color of the selection in an inactive editor. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "editor.inactiveSelectionBackground": ThemeNames;
    /**
     * Color for the debug inline value background.
     */
    "editor.inlineValuesBackground": ThemeNames;
    /**
     * Color for the debug inline value text.
     */
    "editor.inlineValuesForeground": ThemeNames;
    /**
     * Background color for the highlight of line at the cursor position.
     */
    "editor.lineHighlightBackground": ThemeNames;
    /**
     * Background color for the border around the line at the cursor position.
     */
    "editor.lineHighlightBorder": ThemeNames;
    /**
     * Background color when the editor auto renames on type.
     */
    "editor.linkedEditingBackground": ThemeNames;
    /**
     * Background color of highlighted ranges, like by quick open and find features. The color
     * must not be opaque so as not to hide underlying decorations.
     */
    "editor.rangeHighlightBackground": ThemeNames;
    /**
     * Background color of the border around highlighted ranges.
     */
    "editor.rangeHighlightBorder": ThemeNames;
    /**
     * Color of the editor selection.
     */
    "editor.selectionBackground": ThemeNames;
    /**
     * Color of the selected text for high contrast.
     */
    "editor.selectionForeground": ThemeNames;
    /**
     * Color for regions with the same content as the selection. The color must not be opaque so
     * as not to hide underlying decorations.
     */
    "editor.selectionHighlightBackground": ThemeNames;
    /**
     * Border color for regions with the same content as the selection.
     */
    "editor.selectionHighlightBorder": ThemeNames;
    /**
     * Highlight background color of the final tabstop of a snippet.
     */
    "editor.snippetFinalTabstopHighlightBackground": ThemeNames;
    /**
     * Highlight border color of the final tabstop of a snippet.
     */
    "editor.snippetFinalTabstopHighlightBorder": ThemeNames;
    /**
     * Highlight background color of a snippet tabstop.
     */
    "editor.snippetTabstopHighlightBackground": ThemeNames;
    /**
     * Highlight border color of a snippet tabstop.
     */
    "editor.snippetTabstopHighlightBorder": ThemeNames;
    /**
     * Background color for the highlight of line at the top stack frame position.
     */
    "editor.stackFrameHighlightBackground": ThemeNames;
    /**
     * Background color of highlighted symbol, like for go to definition or go next/previous
     * symbol. The color must not be opaque so as not to hide underlying decorations.
     */
    "editor.symbolHighlightBackground": ThemeNames;
    /**
     * Background color of the border around highlighted symbols.
     */
    "editor.symbolHighlightBorder": ThemeNames;
    /**
     * Background color of a symbol during read-access, like reading a variable. The color must
     * not be opaque so as not to hide underlying decorations.
     */
    "editor.wordHighlightBackground": ThemeNames;
    /**
     * Border color of a symbol during read-access, like reading a variable.
     */
    "editor.wordHighlightBorder": ThemeNames;
    /**
     * Background color of a symbol during write-access, like writing to a variable. The color
     * must not be opaque so as not to hide underlying decorations.
     */
    "editor.wordHighlightStrongBackground": ThemeNames;
    /**
     * Border color of a symbol during write-access, like writing to a variable.
     */
    "editor.wordHighlightStrongBorder": ThemeNames;
    /**
     * Background color of a textual occurrence for a symbol. The color must not be opaque so as
     * not to hide underlying decorations.
     */
    "editor.wordHighlightTextBackground": ThemeNames;
    /**
     * Border color of a textual occurrence for a symbol.
     */
    "editor.wordHighlightTextBorder": ThemeNames;
    /**
     * Foreground color of brackets (1). Requires enabling bracket pair colorization.
     */
    "editorBracketHighlight.foreground1": ThemeNames;
    /**
     * Foreground color of brackets (2). Requires enabling bracket pair colorization.
     */
    "editorBracketHighlight.foreground2": ThemeNames;
    /**
     * Foreground color of brackets (3). Requires enabling bracket pair colorization.
     */
    "editorBracketHighlight.foreground3": ThemeNames;
    /**
     * Foreground color of brackets (4). Requires enabling bracket pair colorization.
     */
    "editorBracketHighlight.foreground4": ThemeNames;
    /**
     * Foreground color of brackets (5). Requires enabling bracket pair colorization.
     */
    "editorBracketHighlight.foreground5": ThemeNames;
    /**
     * Foreground color of brackets (6). Requires enabling bracket pair colorization.
     */
    "editorBracketHighlight.foreground6": ThemeNames;
    /**
     * Foreground color of unexpected brackets.
     */
    "editorBracketHighlight.unexpectedBracket.foreground": ThemeNames;
    /**
     * Background color behind matching brackets
     */
    "editorBracketMatch.background": ThemeNames;
    /**
     * Color for matching brackets boxes
     */
    "editorBracketMatch.border": ThemeNames;
    /**
     * Background color of active bracket pair guides (1). Requires enabling bracket pair guides.
     */
    "editorBracketPairGuide.activeBackground1": ThemeNames;
    /**
     * Background color of active bracket pair guides (2). Requires enabling bracket pair guides.
     */
    "editorBracketPairGuide.activeBackground2": ThemeNames;
    /**
     * Background color of active bracket pair guides (3). Requires enabling bracket pair guides.
     */
    "editorBracketPairGuide.activeBackground3": ThemeNames;
    /**
     * Background color of active bracket pair guides (4). Requires enabling bracket pair guides.
     */
    "editorBracketPairGuide.activeBackground4": ThemeNames;
    /**
     * Background color of active bracket pair guides (5). Requires enabling bracket pair guides.
     */
    "editorBracketPairGuide.activeBackground5": ThemeNames;
    /**
     * Background color of active bracket pair guides (6). Requires enabling bracket pair guides.
     */
    "editorBracketPairGuide.activeBackground6": ThemeNames;
    /**
     * Background color of inactive bracket pair guides (1). Requires enabling bracket pair
     * guides.
     */
    "editorBracketPairGuide.background1": ThemeNames;
    /**
     * Background color of inactive bracket pair guides (2). Requires enabling bracket pair
     * guides.
     */
    "editorBracketPairGuide.background2": ThemeNames;
    /**
     * Background color of inactive bracket pair guides (3). Requires enabling bracket pair
     * guides.
     */
    "editorBracketPairGuide.background3": ThemeNames;
    /**
     * Background color of inactive bracket pair guides (4). Requires enabling bracket pair
     * guides.
     */
    "editorBracketPairGuide.background4": ThemeNames;
    /**
     * Background color of inactive bracket pair guides (5). Requires enabling bracket pair
     * guides.
     */
    "editorBracketPairGuide.background5": ThemeNames;
    /**
     * Background color of inactive bracket pair guides (6). Requires enabling bracket pair
     * guides.
     */
    "editorBracketPairGuide.background6": ThemeNames;
    /**
     * Foreground color of editor CodeLens
     */
    "editorCodeLens.foreground": ThemeNames;
    /**
     * Color of background for currently selected or hovered comment range.
     */
    "editorCommentsWidget.rangeActiveBackground": ThemeNames;
    /**
     * Color of background for comment ranges.
     */
    "editorCommentsWidget.rangeBackground": ThemeNames;
    /**
     * Color of borders and arrow for resolved comments.
     */
    "editorCommentsWidget.resolvedBorder": ThemeNames;
    /**
     * Color of borders and arrow for unresolved comments.
     */
    "editorCommentsWidget.unresolvedBorder": ThemeNames;
    /**
     * The background color of the editor cursor. Allows customizing the color of a character
     * overlapped by a block cursor.
     */
    "editorCursor.background": ThemeNames;
    /**
     * Color of the editor cursor.
     */
    "editorCursor.foreground": ThemeNames;
    /**
     * Background color of error text in the editor. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "editorError.background": ThemeNames;
    /**
     * If set, color of double underlines for errors in the editor.
     */
    "editorError.border": ThemeNames;
    /**
     * Foreground color of error squigglies in the editor.
     */
    "editorError.foreground": ThemeNames;
    /**
     * Background color of the ghost text in the editor.
     */
    "editorGhostText.background": ThemeNames;
    /**
     * Border color of ghost text in the editor.
     */
    "editorGhostText.border": ThemeNames;
    /**
     * Foreground color of the ghost text in the editor.
     */
    "editorGhostText.foreground": ThemeNames;
    /**
     * Color to separate multiple editor groups from each other. Editor groups are the
     * containers of editors.
     */
    "editorGroup.border": ThemeNames;
    /**
     * Background color when dragging editors around. The color should have transparency so that
     * the editor contents can still shine through.
     */
    "editorGroup.dropBackground": ThemeNames;
    /**
     * Background color of text shown over editors when dragging files. This text informs the
     * user that they can hold shift to drop into the editor.
     */
    "editorGroup.dropIntoPromptBackground": ThemeNames;
    /**
     * Border color of text shown over editors when dragging files. This text informs the user
     * that they can hold shift to drop into the editor.
     */
    "editorGroup.dropIntoPromptBorder": ThemeNames;
    /**
     * Foreground color of text shown over editors when dragging files. This text informs the
     * user that they can hold shift to drop into the editor.
     */
    "editorGroup.dropIntoPromptForeground": ThemeNames;
    /**
     * Background color of an empty editor group. Editor groups are the containers of editors.
     */
    "editorGroup.emptyBackground": ThemeNames;
    /**
     * Border color of an empty editor group that is focused. Editor groups are the containers
     * of editors.
     */
    "editorGroup.focusedEmptyBorder": ThemeNames;
    /**
     * Border color of the editor group title header. Editor groups are the containers of
     * editors.
     */
    "editorGroupHeader.border": ThemeNames;
    /**
     * Background color of the editor group title header when tabs are disabled
     * (`"workbench.editor.showTabs": false`). Editor groups are the containers of editors.
     */
    "editorGroupHeader.noTabsBackground": ThemeNames;
    /**
     * Background color of the editor group title header when tabs are enabled. Editor groups
     * are the containers of editors.
     */
    "editorGroupHeader.tabsBackground": ThemeNames;
    /**
     * Border color of the editor group title header when tabs are enabled. Editor groups are
     * the containers of editors.
     */
    "editorGroupHeader.tabsBorder": ThemeNames;
    /**
     * Editor gutter background color for lines that are added.
     */
    "editorGutter.addedBackground": ThemeNames;
    /**
     * Background color of the editor gutter. The gutter contains the glyph margins and the line
     * numbers.
     */
    "editorGutter.background": ThemeNames;
    /**
     * Editor gutter decoration color for commenting glyphs.
     */
    "editorGutter.commentGlyphForeground": ThemeNames;
    /**
     * Editor gutter decoration color for commenting ranges. This color should be opaque.
     */
    "editorGutter.commentRangeForeground": ThemeNames;
    /**
     * Editor gutter decoration color for commenting glyphs for unresolved comment threads.
     */
    "editorGutter.commentUnresolvedGlyphForeground": ThemeNames;
    /**
     * Editor gutter background color for lines that are deleted.
     */
    "editorGutter.deletedBackground": ThemeNames;
    /**
     * Color of the folding control in the editor gutter.
     */
    "editorGutter.foldingControlForeground": ThemeNames;
    /**
     * Editor gutter background color for lines that are modified.
     */
    "editorGutter.modifiedBackground": ThemeNames;
    /**
     * If set, color of double underlines for hints in the editor.
     */
    "editorHint.border": ThemeNames;
    /**
     * Foreground color of hint squigglies in the editor.
     */
    "editorHint.foreground": ThemeNames;
    /**
     * Background color of the editor hover.
     */
    "editorHoverWidget.background": ThemeNames;
    /**
     * Border color of the editor hover.
     */
    "editorHoverWidget.border": ThemeNames;
    /**
     * Foreground color of the editor hover.
     */
    "editorHoverWidget.foreground": ThemeNames;
    /**
     * Foreground color of the active item in the parameter hint.
     */
    "editorHoverWidget.highlightForeground": ThemeNames;
    /**
     * Background color of the editor hover status bar.
     */
    "editorHoverWidget.statusBarBackground": ThemeNames;
    /**
     * Color of the active editor indentation guides (1).
     */
    "editorIndentGuide.activeBackground1": ThemeNames;
    /**
     * Color of the active editor indentation guides (2).
     */
    "editorIndentGuide.activeBackground2": ThemeNames;
    /**
     * Color of the active editor indentation guides (3).
     */
    "editorIndentGuide.activeBackground3": ThemeNames;
    /**
     * Color of the active editor indentation guides (4).
     */
    "editorIndentGuide.activeBackground4": ThemeNames;
    /**
     * Color of the active editor indentation guides (5).
     */
    "editorIndentGuide.activeBackground5": ThemeNames;
    /**
     * Color of the active editor indentation guides (6).
     */
    "editorIndentGuide.activeBackground6": ThemeNames;
    /**
     * Color of the editor indentation guides (1).
     */
    "editorIndentGuide.background1": ThemeNames;
    /**
     * Color of the editor indentation guides (2).
     */
    "editorIndentGuide.background2": ThemeNames;
    /**
     * Color of the editor indentation guides (3).
     */
    "editorIndentGuide.background3": ThemeNames;
    /**
     * Color of the editor indentation guides (4).
     */
    "editorIndentGuide.background4": ThemeNames;
    /**
     * Color of the editor indentation guides (5).
     */
    "editorIndentGuide.background5": ThemeNames;
    /**
     * Color of the editor indentation guides (6).
     */
    "editorIndentGuide.background6": ThemeNames;
    /**
     * Background color of info text in the editor. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "editorInfo.background": ThemeNames;
    /**
     * If set, color of double underlines for infos in the editor.
     */
    "editorInfo.border": ThemeNames;
    /**
     * Foreground color of info squigglies in the editor.
     */
    "editorInfo.foreground": ThemeNames;
    /**
     * Background color of inline hints
     */
    "editorInlayHint.background": ThemeNames;
    /**
     * Foreground color of inline hints
     */
    "editorInlayHint.foreground": ThemeNames;
    /**
     * Background color of inline hints for parameters
     */
    "editorInlayHint.parameterBackground": ThemeNames;
    /**
     * Foreground color of inline hints for parameters
     */
    "editorInlayHint.parameterForeground": ThemeNames;
    /**
     * Background color of inline hints for types
     */
    "editorInlayHint.typeBackground": ThemeNames;
    /**
     * Foreground color of inline hints for types
     */
    "editorInlayHint.typeForeground": ThemeNames;
    /**
     * The color used for the lightbulb actions icon.
     */
    "editorLightBulb.foreground": ThemeNames;
    /**
     * The color used for the lightbulb auto fix actions icon.
     */
    "editorLightBulbAutoFix.foreground": ThemeNames;
    /**
     * Color of editor active line number
     */
    "editorLineNumber.activeForeground": ThemeNames;
    /**
     * Color of the final editor line when editor.renderFinalNewline is set to dimmed.
     */
    "editorLineNumber.dimmedForeground": ThemeNames;
    /**
     * Color of editor line numbers.
     */
    "editorLineNumber.foreground": ThemeNames;
    /**
     * Color of active links.
     */
    "editorLink.activeForeground": ThemeNames;
    /**
     * Editor marker navigation widget background.
     */
    "editorMarkerNavigation.background": ThemeNames;
    /**
     * Editor marker navigation widget error color.
     */
    "editorMarkerNavigationError.background": ThemeNames;
    /**
     * Editor marker navigation widget error heading background.
     */
    "editorMarkerNavigationError.headerBackground": ThemeNames;
    /**
     * Editor marker navigation widget info color.
     */
    "editorMarkerNavigationInfo.background": ThemeNames;
    /**
     * Editor marker navigation widget info heading background.
     */
    "editorMarkerNavigationInfo.headerBackground": ThemeNames;
    /**
     * Editor marker navigation widget warning color.
     */
    "editorMarkerNavigationWarning.background": ThemeNames;
    /**
     * Editor marker navigation widget warning heading background.
     */
    "editorMarkerNavigationWarning.headerBackground": ThemeNames;
    /**
     * Overview ruler marker color for added content.
     */
    "editorOverviewRuler.addedForeground": ThemeNames;
    /**
     * Background color of the editor overview ruler.
     */
    "editorOverviewRuler.background": ThemeNames;
    /**
     * Color of the overview ruler border.
     */
    "editorOverviewRuler.border": ThemeNames;
    /**
     * Overview ruler marker color for matching brackets.
     */
    "editorOverviewRuler.bracketMatchForeground": ThemeNames;
    /**
     * Editor overview ruler decoration color for resolved comments. This color should be opaque.
     */
    "editorOverviewRuler.commentForeground": ThemeNames;
    /**
     * Editor overview ruler decoration color for unresolved comments. This color should be
     * opaque.
     */
    "editorOverviewRuler.commentUnresolvedForeground": ThemeNames;
    /**
     * Common ancestor overview ruler foreground for inline merge-conflicts.
     */
    "editorOverviewRuler.commonContentForeground": ThemeNames;
    /**
     * Current overview ruler foreground for inline merge-conflicts.
     */
    "editorOverviewRuler.currentContentForeground": ThemeNames;
    /**
     * Overview ruler marker color for deleted content.
     */
    "editorOverviewRuler.deletedForeground": ThemeNames;
    /**
     * Overview ruler marker color for errors.
     */
    "editorOverviewRuler.errorForeground": ThemeNames;
    /**
     * Overview ruler marker color for find matches. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "editorOverviewRuler.findMatchForeground": ThemeNames;
    /**
     * Incoming overview ruler foreground for inline merge-conflicts.
     */
    "editorOverviewRuler.incomingContentForeground": ThemeNames;
    /**
     * Overview ruler marker color for infos.
     */
    "editorOverviewRuler.infoForeground": ThemeNames;
    /**
     * Overview ruler marker color for modified content.
     */
    "editorOverviewRuler.modifiedForeground": ThemeNames;
    /**
     * Overview ruler marker color for range highlights. The color must not be opaque so as not
     * to hide underlying decorations.
     */
    "editorOverviewRuler.rangeHighlightForeground": ThemeNames;
    /**
     * Overview ruler marker color for selection highlights. The color must not be opaque so as
     * not to hide underlying decorations.
     */
    "editorOverviewRuler.selectionHighlightForeground": ThemeNames;
    /**
     * Overview ruler marker color for warnings.
     */
    "editorOverviewRuler.warningForeground": ThemeNames;
    /**
     * Overview ruler marker color for symbol highlights. The color must not be opaque so as not
     * to hide underlying decorations.
     */
    "editorOverviewRuler.wordHighlightForeground": ThemeNames;
    /**
     * Overview ruler marker color for write-access symbol highlights. The color must not be
     * opaque so as not to hide underlying decorations.
     */
    "editorOverviewRuler.wordHighlightStrongForeground": ThemeNames;
    /**
     * Overview ruler marker color of a textual occurrence for a symbol. The color must not be
     * opaque so as not to hide underlying decorations.
     */
    "editorOverviewRuler.wordHighlightTextForeground": ThemeNames;
    /**
     * Background color of the editor pane visible on the left and right side of the centered
     * editor layout.
     */
    "editorPane.background": ThemeNames;
    /**
     * Color of the editor rulers.
     */
    "editorRuler.foreground": ThemeNames;
    /**
     * Sticky scroll background color for the editor
     */
    "editorStickyScroll.background": ThemeNames;
    /**
     * Sticky scroll on hover background color for the editor
     */
    "editorStickyScrollHover.background": ThemeNames;
    /**
     * Background color of the suggest widget.
     */
    "editorSuggestWidget.background": ThemeNames;
    /**
     * Border color of the suggest widget.
     */
    "editorSuggestWidget.border": ThemeNames;
    /**
     * Color of the match highlights in the suggest widget when an item is focused.
     */
    "editorSuggestWidget.focusHighlightForeground": ThemeNames;
    /**
     * Foreground color of the suggest widget.
     */
    "editorSuggestWidget.foreground": ThemeNames;
    /**
     * Color of the match highlights in the suggest widget.
     */
    "editorSuggestWidget.highlightForeground": ThemeNames;
    /**
     * Background color of the selected entry in the suggest widget.
     */
    "editorSuggestWidget.selectedBackground": ThemeNames;
    /**
     * Foreground color of the selected entry in the suggest widget.
     */
    "editorSuggestWidget.selectedForeground": ThemeNames;
    /**
     * Icon foreground color of the selected entry in the suggest widget.
     */
    "editorSuggestWidget.selectedIconForeground": ThemeNames;
    /**
     * Foreground color of the suggest widget status.
     */
    "editorSuggestWidgetStatus.foreground": ThemeNames;
    /**
     * Background color used to highlight unicode characters.
     */
    "editorUnicodeHighlight.background": ThemeNames;
    /**
     * Border color used to highlight unicode characters.
     */
    "editorUnicodeHighlight.border": ThemeNames;
    /**
     * Border color of unnecessary (unused) source code in the editor.
     */
    "editorUnnecessaryCode.border": ThemeNames;
    /**
     * Opacity of unnecessary (unused) source code in the editor. For example,null|string;
     * render the code with 75% opacity. For high contrast themes, use the
     * 'editorUnnecessaryCode.border' theme color to underline unnecessary code instead of
     * fading it out.
     */
    "editorUnnecessaryCode.opacity": ThemeNames;
    /**
     * Background color of warning text in the editor. The color must not be opaque so as not to
     * hide underlying decorations.
     */
    "editorWarning.background": ThemeNames;
    /**
     * If set, color of double underlines for warnings in the editor.
     */
    "editorWarning.border": ThemeNames;
    /**
     * Foreground color of warning squigglies in the editor.
     */
    "editorWarning.foreground": ThemeNames;
    /**
     * Color of whitespace characters in the editor.
     */
    "editorWhitespace.foreground": ThemeNames;
    /**
     * Background color of editor widgets, such as find/replace.
     */
    "editorWidget.background": ThemeNames;
    /**
     * Border color of editor widgets. The color is only used if the widget chooses to have a
     * border and if the color is not overridden by a widget.
     */
    "editorWidget.border": ThemeNames;
    /**
     * Foreground color of editor widgets, such as find/replace.
     */
    "editorWidget.foreground": ThemeNames;
    /**
     * Border color of the resize bar of editor widgets. The color is only used if the widget
     * chooses to have a resize border and if the color is not overridden by a widget.
     */
    "editorWidget.resizeBorder": ThemeNames;
    /**
     * Overall foreground color for error messages. This color is only used if not overridden by
     * a component.
     */
    errorForeground?: ThemeNames;
    /**
     * Background color for the remote badge in the extensions view.
     */
    "extensionBadge.remoteBackground": ThemeNames;
    /**
     * Foreground color for the remote badge in the extensions view.
     */
    "extensionBadge.remoteForeground": ThemeNames;
    /**
     * Button background color for extension actions.
     */
    "extensionButton.background": ThemeNames;
    /**
     * Button foreground color for extension actions.
     */
    "extensionButton.foreground": ThemeNames;
    /**
     * Button background hover color for extension actions.
     */
    "extensionButton.hoverBackground": ThemeNames;
    /**
     * Button background color for extension actions that stand out (e.g. install button).
     */
    "extensionButton.prominentBackground": ThemeNames;
    /**
     * Button foreground color for extension actions that stand out (e.g. install button).
     */
    "extensionButton.prominentForeground": ThemeNames;
    /**
     * Button background hover color for extension actions that stand out (e.g. install button).
     */
    "extensionButton.prominentHoverBackground": ThemeNames;
    /**
     * Button separator color for extension actions
     */
    "extensionButton.separator": ThemeNames;
    /**
     * The icon color for pre-release extension.
     */
    "extensionIcon.preReleaseForeground": ThemeNames;
    /**
     * The icon color for extension sponsor.
     */
    "extensionIcon.sponsorForeground": ThemeNames;
    /**
     * The icon color for extension ratings.
     */
    "extensionIcon.starForeground": ThemeNames;
    /**
     * The icon color for extension verified publisher.
     */
    "extensionIcon.verifiedForeground": ThemeNames;
    /**
     * Overall border color for focused elements. This color is only used if not overridden by a
     * component.
     */
    focusBorder?: ThemeNames;
    /**
     * Overall foreground color. This color is only used if not overridden by a component.
     */
    foreground?: ThemeNames;
    /**
     * Color for added resources.
     */
    "gitDecoration.addedResourceForeground": ThemeNames;
    /**
     * Color for resources with conflicts.
     */
    "gitDecoration.conflictingResourceForeground": ThemeNames;
    /**
     * Color for deleted resources.
     */
    "gitDecoration.deletedResourceForeground": ThemeNames;
    /**
     * Color for ignored resources.
     */
    "gitDecoration.ignoredResourceForeground": ThemeNames;
    /**
     * Color for modified resources.
     */
    "gitDecoration.modifiedResourceForeground": ThemeNames;
    /**
     * Color for renamed or copied resources.
     */
    "gitDecoration.renamedResourceForeground": ThemeNames;
    /**
     * Color for deleted resources which have been staged.
     */
    "gitDecoration.stageDeletedResourceForeground": ThemeNames;
    /**
     * Color for modified resources which have been staged.
     */
    "gitDecoration.stageModifiedResourceForeground": ThemeNames;
    /**
     * Color for submodule resources.
     */
    "gitDecoration.submoduleResourceForeground": ThemeNames;
    /**
     * Color for untracked resources.
     */
    "gitDecoration.untrackedResourceForeground": ThemeNames;
    /**
     * The default color for icons in the workbench.
     */
    "icon.foreground": ThemeNames;
    /**
     * Background color of the interactive editor widget
     */
    "inlineChat.background": ThemeNames;
    /**
     * Border color of the interactive editor widget
     */
    "inlineChat.border": ThemeNames;
    /**
     * Background highlighting of the current interactive region. Must be transparent.
     */
    "inlineChat.regionHighlight": ThemeNames;
    /**
     * Shadow color of the interactive editor widget
     */
    "inlineChat.shadow": ThemeNames;
    /**
     * Background color of inserted text in the interactive editor input
     */
    "inlineChatDiff.inserted": ThemeNames;
    /**
     * Background color of removed text in the interactive editor input
     */
    "inlineChatDiff.removed": ThemeNames;
    /**
     * Background color of the interactive editor input
     */
    "inlineChatInput.background": ThemeNames;
    /**
     * Border color of the interactive editor input
     */
    "inlineChatInput.border": ThemeNames;
    /**
     * Border color of the interactive editor input when focused
     */
    "inlineChatInput.focusBorder": ThemeNames;
    /**
     * Foreground color of the interactive editor input placeholder
     */
    "inlineChatInput.placeholderForeground": ThemeNames;
    /**
     * Input box background.
     */
    "input.background": ThemeNames;
    /**
     * Input box border.
     */
    "input.border": ThemeNames;
    /**
     * Input box foreground.
     */
    "input.foreground": ThemeNames;
    /**
     * Input box foreground color for placeholder text.
     */
    "input.placeholderForeground": ThemeNames;
    /**
     * Background hover color of options in input fields.
     */
    "inputOption.activeBackground": ThemeNames;
    /**
     * Border color of activated options in input fields.
     */
    "inputOption.activeBorder": ThemeNames;
    /**
     * Foreground color of activated options in input fields.
     */
    "inputOption.activeForeground": ThemeNames;
    /**
     * Background color of activated options in input fields.
     */
    "inputOption.hoverBackground": ThemeNames;
    /**
     * Input validation background color for error severity.
     */
    "inputValidation.errorBackground": ThemeNames;
    /**
     * Input validation border color for error severity.
     */
    "inputValidation.errorBorder": ThemeNames;
    /**
     * Input validation foreground color for error severity.
     */
    "inputValidation.errorForeground": ThemeNames;
    /**
     * Input validation background color for information severity.
     */
    "inputValidation.infoBackground": ThemeNames;
    /**
     * Input validation border color for information severity.
     */
    "inputValidation.infoBorder": ThemeNames;
    /**
     * Input validation foreground color for information severity.
     */
    "inputValidation.infoForeground": ThemeNames;
    /**
     * Input validation background color for warning severity.
     */
    "inputValidation.warningBackground": ThemeNames;
    /**
     * Input validation border color for warning severity.
     */
    "inputValidation.warningBorder": ThemeNames;
    /**
     * Input validation foreground color for warning severity.
     */
    "inputValidation.warningForeground": ThemeNames;
    /**
     * The border color for the current interactive code cell when the editor has focus.
     */
    "interactive.activeCodeBorder": ThemeNames;
    /**
     * The border color for the current interactive code cell when the editor does not have
     * focus.
     */
    "interactive.inactiveCodeBorder": ThemeNames;
    /**
     * Keybinding label background color. The keybinding label is used to represent a keyboard
     * shortcut.
     */
    "keybindingLabel.background": ThemeNames;
    /**
     * Keybinding label border color. The keybinding label is used to represent a keyboard
     * shortcut.
     */
    "keybindingLabel.border": ThemeNames;
    /**
     * Keybinding label border bottom color. The keybinding label is used to represent a
     * keyboard shortcut.
     */
    "keybindingLabel.bottomBorder": ThemeNames;
    /**
     * Keybinding label foreground color. The keybinding label is used to represent a keyboard
     * shortcut.
     */
    "keybindingLabel.foreground": ThemeNames;
    /**
     * Background color for the keyboard shortcuts table header.
     */
    "keybindingTable.headerBackground": ThemeNames;
    /**
     * Background color for the keyboard shortcuts table alternating rows.
     */
    "keybindingTable.rowsBackground": ThemeNames;
    /**
     * List/Tree background color for the selected item when the list/tree is active. An active
     * list/tree has keyboard focus, an inactive does not.
     */
    "list.activeSelectionBackground": ThemeNames;
    /**
     * List/Tree foreground color for the selected item when the list/tree is active. An active
     * list/tree has keyboard focus, an inactive does not.
     */
    "list.activeSelectionForeground": ThemeNames;
    /**
     * List/Tree icon foreground color for the selected item when the list/tree is active. An
     * active list/tree has keyboard focus, an inactive does not.
     */
    "list.activeSelectionIconForeground": ThemeNames;
    /**
     * List/Tree foreground color for items that are deemphasized.
     */
    "list.deemphasizedForeground": ThemeNames;
    /**
     * List/Tree drag and drop background when moving items around using the mouse.
     */
    "list.dropBackground": ThemeNames;
    /**
     * Foreground color of list items containing errors.
     */
    "list.errorForeground": ThemeNames;
    /**
     * Background color of the filtered match.
     */
    "list.filterMatchBackground": ThemeNames;
    /**
     * Border color of the filtered match.
     */
    "list.filterMatchBorder": ThemeNames;
    /**
     * List/Tree outline color for the focused item when the list/tree is active and selected.
     * An active list/tree has keyboard focus, an inactive does not.
     */
    "list.focusAndSelectionOutline": ThemeNames;
    /**
     * List/Tree background color for the focused item when the list/tree is active. An active
     * list/tree has keyboard focus, an inactive does not.
     */
    "list.focusBackground": ThemeNames;
    /**
     * List/Tree foreground color for the focused item when the list/tree is active. An active
     * list/tree has keyboard focus, an inactive does not.
     */
    "list.focusForeground": ThemeNames;
    /**
     * List/Tree foreground color of the match highlights on actively focused items when
     * searching inside the list/tree.
     */
    "list.focusHighlightForeground": ThemeNames;
    /**
     * List/Tree outline color for the focused item when the list/tree is active. An active
     * list/tree has keyboard focus, an inactive does not.
     */
    "list.focusOutline": ThemeNames;
    /**
     * List/Tree foreground color of the match highlights when searching inside the list/tree.
     */
    "list.highlightForeground": ThemeNames;
    /**
     * List/Tree background when hovering over items using the mouse.
     */
    "list.hoverBackground": ThemeNames;
    /**
     * List/Tree foreground when hovering over items using the mouse.
     */
    "list.hoverForeground": ThemeNames;
    /**
     * List/Tree background color for the focused item when the list/tree is inactive. An active
     * list/tree has keyboard focus, an inactive does not.
     */
    "list.inactiveFocusBackground": ThemeNames;
    /**
     * List/Tree outline color for the focused item when the list/tree is inactive. An active
     * list/tree has keyboard focus, an inactive does not.
     */
    "list.inactiveFocusOutline": ThemeNames;
    /**
     * List/Tree background color for the selected item when the list/tree is inactive. An
     * active list/tree has keyboard focus, an inactive does not.
     */
    "list.inactiveSelectionBackground": ThemeNames;
    /**
     * List/Tree foreground color for the selected item when the list/tree is inactive. An
     * active list/tree has keyboard focus, an inactive does not.
     */
    "list.inactiveSelectionForeground": ThemeNames;
    /**
     * List/Tree icon foreground color for the selected item when the list/tree is inactive. An
     * active list/tree has keyboard focus, an inactive does not.
     */
    "list.inactiveSelectionIconForeground": ThemeNames;
    /**
     * List/Tree foreground color for invalid items, for example an unresolved root in explorer.
     */
    "list.invalidItemForeground": ThemeNames;
    /**
     * Foreground color of list items containing warnings.
     */
    "list.warningForeground": ThemeNames;
    /**
     * Background color of the type filter widget in lists and trees.
     */
    "listFilterWidget.background": ThemeNames;
    /**
     * Outline color of the type filter widget in lists and trees, when there are no matches.
     */
    "listFilterWidget.noMatchesOutline": ThemeNames;
    /**
     * Outline color of the type filter widget in lists and trees.
     */
    "listFilterWidget.outline": ThemeNames;
    /**
     * Shadow color of the type filter widget in lists and trees.
     */
    "listFilterWidget.shadow": ThemeNames;
    /**
     * Background color of menu items.
     */
    "menu.background": ThemeNames;
    /**
     * Border color of menus.
     */
    "menu.border": ThemeNames;
    /**
     * Foreground color of menu items.
     */
    "menu.foreground": ThemeNames;
    /**
     * Background color of the selected menu item in menus.
     */
    "menu.selectionBackground": ThemeNames;
    /**
     * Border color of the selected menu item in menus.
     */
    "menu.selectionBorder": ThemeNames;
    /**
     * Foreground color of the selected menu item in menus.
     */
    "menu.selectionForeground": ThemeNames;
    /**
     * Color of a separator menu item in menus.
     */
    "menu.separatorBackground": ThemeNames;
    /**
     * Background color of the selected menu item in the menubar.
     */
    "menubar.selectionBackground": ThemeNames;
    /**
     * Border color of the selected menu item in the menubar.
     */
    "menubar.selectionBorder": ThemeNames;
    /**
     * Foreground color of the selected menu item in the menubar.
     */
    "menubar.selectionForeground": ThemeNames;
    /**
     * Border color on headers and the splitter in inline merge-conflicts.
     */
    "merge.border": ThemeNames;
    /**
     * Common ancestor content background in inline merge-conflicts. The color must not be
     * opaque so as not to hide underlying decorations.
     */
    "merge.commonContentBackground": ThemeNames;
    /**
     * Common ancestor header background in inline merge-conflicts. The color must not be opaque
     * so as not to hide underlying decorations.
     */
    "merge.commonHeaderBackground": ThemeNames;
    /**
     * Current content background in inline merge-conflicts. The color must not be opaque so as
     * not to hide underlying decorations.
     */
    "merge.currentContentBackground": ThemeNames;
    /**
     * Current header background in inline merge-conflicts. The color must not be opaque so as
     * not to hide underlying decorations.
     */
    "merge.currentHeaderBackground": ThemeNames;
    /**
     * Incoming content background in inline merge-conflicts. The color must not be opaque so as
     * not to hide underlying decorations.
     */
    "merge.incomingContentBackground": ThemeNames;
    /**
     * Incoming header background in inline merge-conflicts. The color must not be opaque so as
     * not to hide underlying decorations.
     */
    "merge.incomingHeaderBackground": ThemeNames;
    /**
     * The background color for changes.
     */
    "mergeEditor.change.background": ThemeNames;
    /**
     * The background color for word changes.
     */
    "mergeEditor.change.word.background": ThemeNames;
    /**
     * The background color for changes in base.
     */
    "mergeEditor.changeBase.background": ThemeNames;
    /**
     * The background color for word changes in base.
     */
    "mergeEditor.changeBase.word.background": ThemeNames;
    /**
     * The foreground color for changes in input 1.
     */
    "mergeEditor.conflict.handled.minimapOverViewRuler": ThemeNames;
    /**
     * The border color of handled focused conflicts.
     */
    "mergeEditor.conflict.handledFocused.border": ThemeNames;
    /**
     * The border color of handled unfocused conflicts.
     */
    "mergeEditor.conflict.handledUnfocused.border": ThemeNames;
    /**
     * The background color of decorations in input 1.
     */
    "mergeEditor.conflict.input1.background": ThemeNames;
    /**
     * The background color of decorations in input 2.
     */
    "mergeEditor.conflict.input2.background": ThemeNames;
    /**
     * The foreground color for changes in input 1.
     */
    "mergeEditor.conflict.unhandled.minimapOverViewRuler": ThemeNames;
    /**
     * The border color of unhandled focused conflicts.
     */
    "mergeEditor.conflict.unhandledFocused.border": ThemeNames;
    /**
     * The border color of unhandled unfocused conflicts.
     */
    "mergeEditor.conflict.unhandledUnfocused.border": ThemeNames;
    /**
     * The background of the "Conflicting Lines" text.
     */
    "mergeEditor.conflictingLines.background": ThemeNames;
    /**
     * Minimap background color.
     */
    "minimap.background": ThemeNames;
    /**
     * Minimap marker color for errors.
     */
    "minimap.errorHighlight": ThemeNames;
    /**
     * Minimap marker color for find matches.
     */
    "minimap.findMatchHighlight": ThemeNames;
    /**
     * Opacity of foreground elements rendered in the minimap. For example,null|string;
     * render the elements with 75% opacity.
     */
    "minimap.foregroundOpacity": ThemeNames;
    /**
     * Minimap marker color for the editor selection.
     */
    "minimap.selectionHighlight": ThemeNames;
    /**
     * Minimap marker color for repeating editor selections.
     */
    "minimap.selectionOccurrenceHighlight": ThemeNames;
    /**
     * Minimap marker color for warnings.
     */
    "minimap.warningHighlight": ThemeNames;
    /**
     * Minimap marker color for infos.
     */
    "minimap.infoHighlight": ThemeNames;
    /**
     * Minimap gutter background color for lines that are added.
     */
    "minimapGutter.addedBackground": ThemeNames;
    /**
     * Minimap gutter background color for lines that are deleted.
     */
    "minimapGutter.deletedBackground": ThemeNames;
    /**
     * Minimap gutter background color for lines that are modified.
     */
    "minimapGutter.modifiedBackground": ThemeNames;
    /**
     * Minimap slider background color when clicked on.
     */
    "minimapSlider.activeBackground": ThemeNames;
    /**
     * Minimap slider background color.
     */
    "minimapSlider.background": ThemeNames;
    /**
     * Minimap slider background color when hovering.
     */
    "minimapSlider.hoverBackground": ThemeNames;
    /**
     * The border color for notebook cells.
     */
    "notebook.cellBorderColor": ThemeNames;
    /**
     * Cell editor background color.
     */
    "notebook.cellEditorBackground": ThemeNames;
    /**
     * The background color of a cell when the cell is hovered.
     */
    "notebook.cellHoverBackground": ThemeNames;
    /**
     * The color of the notebook cell insertion indicator.
     */
    "notebook.cellInsertionIndicator": ThemeNames;
    /**
     * The background color of notebook cell status bar items.
     */
    "notebook.cellStatusBarItemHoverBackground": ThemeNames;
    /**
     * The color of the separator in the cell bottom toolbar
     */
    "notebook.cellToolbarSeparator": ThemeNames;
    /**
     * Notebook background color.
     */
    "notebook.editorBackground": ThemeNames;
    /**
     * The background color of a cell when the cell is focused.
     */
    "notebook.focusedCellBackground": ThemeNames;
    /**
     * The color of the cell's focus indicator borders when the cell is focused.
     */
    "notebook.focusedCellBorder": ThemeNames;
    /**
     * The color of the notebook cell editor border.
     */
    "notebook.focusedEditorBorder": ThemeNames;
    /**
     * The color of the cell's top and bottom border when a cell is focused while the primary
     * focus is outside of the editor.
     */
    "notebook.inactiveFocusedCellBorder": ThemeNames;
    /**
     * The color of the cell's borders when multiple cells are selected.
     */
    "notebook.inactiveSelectedCellBorder": ThemeNames;
    /**
     * The color of the notebook output container background.
     */
    "notebook.outputContainerBackgroundColor": ThemeNames;
    /**
     * The border color of the notebook output container.
     */
    "notebook.outputContainerBorderColor": ThemeNames;
    /**
     * The background color of a cell when the cell is selected.
     */
    "notebook.selectedCellBackground": ThemeNames;
    /**
     * The color of the cell's top and bottom border when the cell is selected but not focused.
     */
    "notebook.selectedCellBorder": ThemeNames;
    /**
     * Background color of highlighted cell
     */
    "notebook.symbolHighlightBackground": ThemeNames;
    /**
     * The color of the running cell decoration in the notebook editor overview ruler.
     */
    "notebookEditorOverviewRuler.runningCellForeground": ThemeNames;
    /**
     * Notebook scrollbar slider background color when clicked on.
     */
    "notebookScrollbarSlider.activeBackground": ThemeNames;
    /**
     * Notebook scrollbar slider background color.
     */
    "notebookScrollbarSlider.background": ThemeNames;
    /**
     * Notebook scrollbar slider background color when hovering.
     */
    "notebookScrollbarSlider.hoverBackground": ThemeNames;
    /**
     * The error icon color of notebook cells in the cell status bar.
     */
    "notebookStatusErrorIcon.foreground": ThemeNames;
    /**
     * The running icon color of notebook cells in the cell status bar.
     */
    "notebookStatusRunningIcon.foreground": ThemeNames;
    /**
     * The error icon color of notebook cells in the cell status bar.
     */
    "notebookStatusSuccessIcon.foreground": ThemeNames;
    /**
     * Notifications center border color. Notifications slide in from the bottom right of the
     * window.
     */
    "notificationCenter.border": ThemeNames;
    /**
     * Notifications center header background color. Notifications slide in from the bottom
     * right of the window.
     */
    "notificationCenterHeader.background": ThemeNames;
    /**
     * Notifications center header foreground color. Notifications slide in from the bottom
     * right of the window.
     */
    "notificationCenterHeader.foreground": ThemeNames;
    /**
     * Notification links foreground color. Notifications slide in from the bottom right of the
     * window.
     */
    "notificationLink.foreground": ThemeNames;
    /**
     * Notifications background color. Notifications slide in from the bottom right of the
     * window.
     */
    "notifications.background": ThemeNames;
    /**
     * Notifications border color separating from other notifications in the notifications
     * center. Notifications slide in from the bottom right of the window.
     */
    "notifications.border": ThemeNames;
    /**
     * Notifications foreground color. Notifications slide in from the bottom right of the
     * window.
     */
    "notifications.foreground": ThemeNames;
    /**
     * The color used for the icon of error notifications. Notifications slide in from the
     * bottom right of the window.
     */
    "notificationsErrorIcon.foreground": ThemeNames;
    /**
     * The color used for the icon of info notifications. Notifications slide in from the bottom
     * right of the window.
     */
    "notificationsInfoIcon.foreground": ThemeNames;
    /**
     * The color used for the icon of warning notifications. Notifications slide in from the
     * bottom right of the window.
     */
    "notificationsWarningIcon.foreground": ThemeNames;
    /**
     * Notification toast border color. Notifications slide in from the bottom right of the
     * window.
     */
    "notificationToast.border": ThemeNames;
    /**
     * Panel background color. Panels are shown below the editor area and contain views like
     * output and integrated terminal.
     */
    "panel.background": ThemeNames;
    /**
     * Panel border color to separate the panel from the editor. Panels are shown below the
     * editor area and contain views like output and integrated terminal.
     */
    "panel.border": ThemeNames;
    /**
     * Drag and drop feedback color for the panel titles. Panels are shown below the editor area
     * and contain views like output and integrated terminal.
     */
    "panel.dropBorder": ThemeNames;
    /**
     * Input box border for inputs in the panel.
     */
    "panelInput.border": ThemeNames;
    /**
     * Panel section border color used when multiple views are stacked horizontally in the
     * panel. Panels are shown below the editor area and contain views like output and
     * integrated terminal. Panel sections are views nested within the panels.
     */
    "panelSection.border": ThemeNames;
    /**
     * Drag and drop feedback color for the panel sections. The color should have transparency
     * so that the panel sections can still shine through. Panels are shown below the editor
     * area and contain views like output and integrated terminal. Panel sections are views
     * nested within the panels.
     */
    "panelSection.dropBackground": ThemeNames;
    /**
     * Panel section header background color. Panels are shown below the editor area and contain
     * views like output and integrated terminal. Panel sections are views nested within the
     * panels.
     */
    "panelSectionHeader.background": ThemeNames;
    /**
     * Panel section header border color used when multiple views are stacked vertically in the
     * panel. Panels are shown below the editor area and contain views like output and
     * integrated terminal. Panel sections are views nested within the panels.
     */
    "panelSectionHeader.border": ThemeNames;
    /**
     * Panel section header foreground color. Panels are shown below the editor area and contain
     * views like output and integrated terminal. Panel sections are views nested within the
     * panels.
     */
    "panelSectionHeader.foreground": ThemeNames;
    /**
     * Border color for the active panel title. Panels are shown below the editor area and
     * contain views like output and integrated terminal.
     */
    "panelTitle.activeBorder": ThemeNames;
    /**
     * Title color for the active panel. Panels are shown below the editor area and contain
     * views like output and integrated terminal.
     */
    "panelTitle.activeForeground": ThemeNames;
    /**
     * Title color for the inactive panel. Panels are shown below the editor area and contain
     * views like output and integrated terminal.
     */
    "panelTitle.inactiveForeground": ThemeNames;
    /**
     * Color of the peek view borders and arrow.
     */
    "peekView.border": ThemeNames;
    /**
     * Background color of the peek view editor.
     */
    "peekViewEditor.background": ThemeNames;
    /**
     * Match highlight color in the peek view editor.
     */
    "peekViewEditor.matchHighlightBackground": ThemeNames;
    /**
     * Match highlight border in the peek view editor.
     */
    "peekViewEditor.matchHighlightBorder": ThemeNames;
    /**
     * Background color of the gutter in the peek view editor.
     */
    "peekViewEditorGutter.background": ThemeNames;
    /**
     * Background color of sticky scroll in the peek view editor.
     */
    "peekViewEditorStickyScroll.background": ThemeNames;
    /**
     * Background color of the peek view result list.
     */
    "peekViewResult.background": ThemeNames;
    /**
     * Foreground color for file nodes in the peek view result list.
     */
    "peekViewResult.fileForeground": ThemeNames;
    /**
     * Foreground color for line nodes in the peek view result list.
     */
    "peekViewResult.lineForeground": ThemeNames;
    /**
     * Match highlight color in the peek view result list.
     */
    "peekViewResult.matchHighlightBackground": ThemeNames;
    /**
     * Background color of the selected entry in the peek view result list.
     */
    "peekViewResult.selectionBackground": ThemeNames;
    /**
     * Foreground color of the selected entry in the peek view result list.
     */
    "peekViewResult.selectionForeground": ThemeNames;
    /**
     * Background color of the peek view title area.
     */
    "peekViewTitle.background": ThemeNames;
    /**
     * Color of the peek view title info.
     */
    "peekViewTitleDescription.foreground": ThemeNames;
    /**
     * Color of the peek view title.
     */
    "peekViewTitleLabel.foreground": ThemeNames;
    /**
     * Quick picker color for grouping borders.
     */
    "pickerGroup.border": ThemeNames;
    /**
     * Quick picker color for grouping labels.
     */
    "pickerGroup.foreground": ThemeNames;
    /**
     * The color of the icon for a port that has an associated running process.
     */
    "ports.iconRunningProcessForeground": ThemeNames;
    /**
     * The color used for the problems error icon.
     */
    "problemsErrorIcon.foreground": ThemeNames;
    /**
     * The color used for the problems info icon.
     */
    "problemsInfoIcon.foreground": ThemeNames;
    /**
     * The color used for the problems warning icon.
     */
    "problemsWarningIcon.foreground": ThemeNames;
    /**
     * Profile badge background color. The profile badge shows on top of the settings gear icon
     * in the activity bar.
     */
    "profileBadge.background": ThemeNames;
    /**
     * Profile badge foreground color. The profile badge shows on top of the settings gear icon
     * in the activity bar.
     */
    "profileBadge.foreground": ThemeNames;
    /**
     * Background color of the progress bar that can show for long running operations.
     */
    "progressBar.background": ThemeNames;
    /**
     * Quick picker background color. The quick picker widget is the container for pickers like
     * the command palette.
     */
    "quickInput.background": ThemeNames;
    /**
     * Quick picker foreground color. The quick picker widget is the container for pickers like
     * the command palette.
     */
    "quickInput.foreground": ThemeNames;
    "quickInput.list.focusBackground": ThemeNames;
    /**
     * Quick picker background color for the focused item.
     */
    "quickInputList.focusBackground": ThemeNames;
    /**
     * Quick picker foreground color for the focused item.
     */
    "quickInputList.focusForeground": ThemeNames;
    /**
     * Quick picker icon foreground color for the focused item.
     */
    "quickInputList.focusIconForeground": ThemeNames;
    /**
     * Quick picker title background color. The quick picker widget is the container for pickers
     * like the command palette.
     */
    "quickInputTitle.background": ThemeNames;
    /**
     * Border color of active sashes.
     */
    "sash.hoverBorder": ThemeNames;
    /**
     * SCM Provider separator border.
     */
    "scm.providerBorder": ThemeNames;
    /**
     * Scrollbar shadow to indicate that the view is scrolled.
     */
    "scrollbar.shadow": ThemeNames;
    /**
     * Scrollbar slider background color when clicked on.
     */
    "scrollbarSlider.activeBackground": ThemeNames;
    /**
     * Scrollbar slider background color.
     */
    "scrollbarSlider.background": ThemeNames;
    /**
     * Scrollbar slider background color when hovering.
     */
    "scrollbarSlider.hoverBackground": ThemeNames;
    /**
     * Color of the text in the search viewlet's completion message.
     */
    "search.resultsInfoForeground": ThemeNames;
    /**
     * Color of the Search Editor query matches.
     */
    "searchEditor.findMatchBackground": ThemeNames;
    /**
     * Border color of the Search Editor query matches.
     */
    "searchEditor.findMatchBorder": ThemeNames;
    /**
     * Search editor text input box border.
     */
    "searchEditor.textInputBorder": ThemeNames;
    /**
     * The background color of text selections in the workbench (e.g. for input fields or text
     * areas). Note that this does not apply to selections within the editor.
     */
    "selection.background": ThemeNames;
    /**
     * Settings editor checkbox background.
     */
    "settings.checkboxBackground": ThemeNames;
    /**
     * Settings editor checkbox border.
     */
    "settings.checkboxBorder": ThemeNames;
    /**
     * Settings editor checkbox foreground.
     */
    "settings.checkboxForeground": ThemeNames;
    /**
     * Settings editor dropdown background.
     */
    "settings.dropdownBackground": ThemeNames;
    /**
     * Settings editor dropdown border.
     */
    "settings.dropdownBorder": ThemeNames;
    /**
     * Settings editor dropdown foreground.
     */
    "settings.dropdownForeground": ThemeNames;
    /**
     * Settings editor dropdown list border. This surrounds the options and separates the
     * options from the description.
     */
    "settings.dropdownListBorder": ThemeNames;
    /**
     * The background color of a settings row when focused.
     */
    "settings.focusedRowBackground": ThemeNames;
    /**
     * The color of the row's top and bottom border when the row is focused.
     */
    "settings.focusedRowBorder": ThemeNames;
    /**
     * The color of the header container border.
     */
    "settings.headerBorder": ThemeNames;
    /**
     * The foreground color for a section header or active title.
     */
    "settings.headerForeground": ThemeNames;
    /**
     * The color of the modified setting indicator.
     */
    "settings.modifiedItemIndicator": ThemeNames;
    /**
     * Settings editor number input box background.
     */
    "settings.numberInputBackground": ThemeNames;
    /**
     * Settings editor number input box border.
     */
    "settings.numberInputBorder": ThemeNames;
    /**
     * Settings editor number input box foreground.
     */
    "settings.numberInputForeground": ThemeNames;
    /**
     * The background color of a settings row when hovered.
     */
    "settings.rowHoverBackground": ThemeNames;
    /**
     * The color of the Settings editor splitview sash border.
     */
    "settings.sashBorder": ThemeNames;
    /**
     * The foreground color for a section header or hovered title.
     */
    "settings.settingsHeaderHoverForeground": ThemeNames;
    /**
     * Settings editor text input box background.
     */
    "settings.textInputBackground": ThemeNames;
    /**
     * Settings editor text input box border.
     */
    "settings.textInputBorder": ThemeNames;
    /**
     * Settings editor text input box foreground.
     */
    "settings.textInputForeground": ThemeNames;
    /**
     * Side bar background color. The side bar is the container for views like explorer and
     * search.
     */
    "sideBar.background": ThemeNames;
    /**
     * Side bar border color on the side separating to the editor. The side bar is the container
     * for views like explorer and search.
     */
    "sideBar.border": ThemeNames;
    /**
     * Drag and drop feedback color for the side bar sections. The color should have
     * transparency so that the side bar sections can still shine through. The side bar is the
     * container for views like explorer and search. Side bar sections are views nested within
     * the side bar.
     */
    "sideBar.dropBackground": ThemeNames;
    /**
     * Side bar foreground color. The side bar is the container for views like explorer and
     * search.
     */
    "sideBar.foreground": ThemeNames;
    /**
     * Side bar section header background color. The side bar is the container for views like
     * explorer and search. Side bar sections are views nested within the side bar.
     */
    "sideBarSectionHeader.background": ThemeNames;
    /**
     * Side bar section header border color. The side bar is the container for views like
     * explorer and search. Side bar sections are views nested within the side bar.
     */
    "sideBarSectionHeader.border": ThemeNames;
    /**
     * Side bar section header foreground color. The side bar is the container for views like
     * explorer and search. Side bar sections are views nested within the side bar.
     */
    "sideBarSectionHeader.foreground": ThemeNames;
    /**
     * Side bar title foreground color. The side bar is the container for views like explorer
     * and search.
     */
    "sideBarTitle.foreground": ThemeNames;
    /**
     * Color to separate two editors from each other when shown side by side in an editor group
     * from top to bottom.
     */
    "sideBySideEditor.horizontalBorder": ThemeNames;
    /**
     * Color to separate two editors from each other when shown side by side in an editor group
     * from left to right.
     */
    "sideBySideEditor.verticalBorder": ThemeNames;
    /**
     * Border color of the sash border.
     */
    "simpleFindWidget.sashBorder": ThemeNames;
    /**
     * Status bar background color when a workspace or folder is opened. The status bar is shown
     * in the bottom of the window.
     */
    "statusBar.background": ThemeNames;
    /**
     * Status bar border color separating to the sidebar and editor. The status bar is shown in
     * the bottom of the window.
     */
    "statusBar.border": ThemeNames;
    /**
     * Status bar background color when a program is being debugged. The status bar is shown in
     * the bottom of the window
     */
    "statusBar.debuggingBackground": ThemeNames;
    /**
     * Status bar border color separating to the sidebar and editor when a program is being
     * debugged. The status bar is shown in the bottom of the window
     */
    "statusBar.debuggingBorder": ThemeNames;
    /**
     * Status bar foreground color when a program is being debugged. The status bar is shown in
     * the bottom of the window
     */
    "statusBar.debuggingForeground": ThemeNames;
    /**
     * Status bar border color when focused on keyboard navigation. The status bar is shown in
     * the bottom of the window.
     */
    "statusBar.focusBorder": ThemeNames;
    /**
     * Status bar foreground color when a workspace or folder is opened. The status bar is shown
     * in the bottom of the window.
     */
    "statusBar.foreground": ThemeNames;
    /**
     * Status bar background color when no folder is opened. The status bar is shown in the
     * bottom of the window.
     */
    "statusBar.noFolderBackground": ThemeNames;
    /**
     * Status bar border color separating to the sidebar and editor when no folder is opened.
     * The status bar is shown in the bottom of the window.
     */
    "statusBar.noFolderBorder": ThemeNames;
    /**
     * Status bar foreground color when no folder is opened. The status bar is shown in the
     * bottom of the window.
     */
    "statusBar.noFolderForeground": ThemeNames;
    /**
     * Status bar item background color when clicking. The status bar is shown in the bottom of
     * the window.
     */
    "statusBarItem.activeBackground": ThemeNames;
    /**
     * Status bar item background color when hovering an item that contains two hovers. The
     * status bar is shown in the bottom of the window.
     */
    "statusBarItem.compactHoverBackground": ThemeNames;
    /**
     * Status bar error items background color. Error items stand out from other status bar
     * entries to indicate error conditions. The status bar is shown in the bottom of the window.
     */
    "statusBarItem.errorBackground": ThemeNames;
    /**
     * Status bar error items foreground color. Error items stand out from other status bar
     * entries to indicate error conditions. The status bar is shown in the bottom of the window.
     */
    "statusBarItem.errorForeground": ThemeNames;
    /**
     * Status bar error items background color when hovering. Error items stand out from other
     * status bar entries to indicate error conditions. The status bar is shown in the bottom of
     * the window.
     */
    "statusBarItem.errorHoverBackground": ThemeNames;
    /**
     * Status bar error items foreground color when hovering. Error items stand out from other
     * status bar entries to indicate error conditions. The status bar is shown in the bottom of
     * the window.
     */
    "statusBarItem.errorHoverForeground": ThemeNames;
    /**
     * Status bar item border color when focused on keyboard navigation. The status bar is shown
     * in the bottom of the window.
     */
    "statusBarItem.focusBorder": ThemeNames;
    /**
     * Status bar item background color when hovering. The status bar is shown in the bottom of
     * the window.
     */
    "statusBarItem.hoverBackground": ThemeNames;
    /**
     * Status bar item foreground color when hovering. The status bar is shown in the bottom of
     * the window.
     */
    "statusBarItem.hoverForeground": ThemeNames;
    /**
     * Status bar item background color when the workbench is offline.
     */
    "statusBarItem.offlineBackground": ThemeNames;
    /**
     * Status bar item foreground color when the workbench is offline.
     */
    "statusBarItem.offlineForeground": ThemeNames;
    /**
     * Status bar item background hover color when the workbench is offline.
     */
    "statusBarItem.offlineHoverBackground": ThemeNames;
    /**
     * Status bar item foreground hover color when the workbench is offline.
     */
    "statusBarItem.offlineHoverForeground": ThemeNames;
    /**
     * Status bar prominent items background color. Prominent items stand out from other status
     * bar entries to indicate importance. The status bar is shown in the bottom of the window.
     */
    "statusBarItem.prominentBackground": ThemeNames;
    /**
     * Status bar prominent items foreground color. Prominent items stand out from other status
     * bar entries to indicate importance. The status bar is shown in the bottom of the window.
     */
    "statusBarItem.prominentForeground": ThemeNames;
    /**
     * Status bar prominent items background color when hovering. Prominent items stand out from
     * other status bar entries to indicate importance. The status bar is shown in the bottom of
     * the window.
     */
    "statusBarItem.prominentHoverBackground": ThemeNames;
    /**
     * Status bar prominent items foreground color when hovering. Prominent items stand out from
     * other status bar entries to indicate importance. The status bar is shown in the bottom of
     * the window.
     */
    "statusBarItem.prominentHoverForeground": ThemeNames;
    /**
     * Background color for the remote indicator on the status bar.
     */
    "statusBarItem.remoteBackground": ThemeNames;
    /**
     * Foreground color for the remote indicator on the status bar.
     */
    "statusBarItem.remoteForeground": ThemeNames;
    /**
     * Background color for the remote indicator on the status bar when hovering.
     */
    "statusBarItem.remoteHoverBackground": ThemeNames;
    /**
     * Foreground color for the remote indicator on the status bar when hovering.
     */
    "statusBarItem.remoteHoverForeground": ThemeNames;
    /**
     * Status bar warning items background color. Warning items stand out from other status bar
     * entries to indicate warning conditions. The status bar is shown in the bottom of the
     * window.
     */
    "statusBarItem.warningBackground": ThemeNames;
    /**
     * Status bar warning items foreground color. Warning items stand out from other status bar
     * entries to indicate warning conditions. The status bar is shown in the bottom of the
     * window.
     */
    "statusBarItem.warningForeground": ThemeNames;
    /**
     * Status bar warning items background color when hovering. Warning items stand out from
     * other status bar entries to indicate warning conditions. The status bar is shown in the
     * bottom of the window.
     */
    "statusBarItem.warningHoverBackground": ThemeNames;
    /**
     * Status bar warning items foreground color when hovering. Warning items stand out from
     * other status bar entries to indicate warning conditions. The status bar is shown in the
     * bottom of the window.
     */
    "statusBarItem.warningHoverForeground": ThemeNames;
    /**
     * The foreground color for array symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.arrayForeground": ThemeNames;
    /**
     * The foreground color for boolean symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.booleanForeground": ThemeNames;
    /**
     * The foreground color for class symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.classForeground": ThemeNames;
    /**
     * The foreground color for color symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.colorForeground": ThemeNames;
    /**
     * The foreground color for constant symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.constantForeground": ThemeNames;
    /**
     * The foreground color for constructor symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.constructorForeground": ThemeNames;
    /**
     * The foreground color for enumerator symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.enumeratorForeground": ThemeNames;
    /**
     * The foreground color for enumerator member symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.enumeratorMemberForeground": ThemeNames;
    /**
     * The foreground color for event symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.eventForeground": ThemeNames;
    /**
     * The foreground color for field symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.fieldForeground": ThemeNames;
    /**
     * The foreground color for file symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.fileForeground": ThemeNames;
    /**
     * The foreground color for folder symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.folderForeground": ThemeNames;
    /**
     * The foreground color for function symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.functionForeground": ThemeNames;
    /**
     * The foreground color for interface symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.interfaceForeground": ThemeNames;
    /**
     * The foreground color for key symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.keyForeground": ThemeNames;
    /**
     * The foreground color for keyword symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.keywordForeground": ThemeNames;
    /**
     * The foreground color for method symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.methodForeground": ThemeNames;
    /**
     * The foreground color for module symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.moduleForeground": ThemeNames;
    /**
     * The foreground color for namespace symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.namespaceForeground": ThemeNames;
    /**
     * The foreground color for null symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.nullForeground": ThemeNames;
    /**
     * The foreground color for number symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.numberForeground": ThemeNames;
    /**
     * The foreground color for object symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.objectForeground": ThemeNames;
    /**
     * The foreground color for operator symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.operatorForeground": ThemeNames;
    /**
     * The foreground color for package symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.packageForeground": ThemeNames;
    /**
     * The foreground color for property symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.propertyForeground": ThemeNames;
    /**
     * The foreground color for reference symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.referenceForeground": ThemeNames;
    /**
     * The foreground color for snippet symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.snippetForeground": ThemeNames;
    /**
     * The foreground color for string symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.stringForeground": ThemeNames;
    /**
     * The foreground color for struct symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.structForeground": ThemeNames;
    /**
     * The foreground color for text symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.textForeground": ThemeNames;
    /**
     * The foreground color for type parameter symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.typeParameterForeground": ThemeNames;
    /**
     * The foreground color for unit symbols. These symbols appear in the outline, breadcrumb,
     * and suggest widget.
     */
    "symbolIcon.unitForeground": ThemeNames;
    /**
     * The foreground color for variable symbols. These symbols appear in the outline,
     * breadcrumb, and suggest widget.
     */
    "symbolIcon.variableForeground": ThemeNames;
    /**
     * Active tab background color in an active group. Tabs are the containers for editors in
     * the editor area. Multiple tabs can be opened in one editor group. There can be multiple
     * editor groups.
     */
    "tab.activeBackground": ThemeNames;
    /**
     * Border on the bottom of an active tab. Tabs are the containers for editors in the editor
     * area. Multiple tabs can be opened in one editor group. There can be multiple editor
     * groups.
     */
    "tab.activeBorder": ThemeNames;
    /**
     * Border to the top of an active tab. Tabs are the containers for editors in the editor
     * area. Multiple tabs can be opened in one editor group. There can be multiple editor
     * groups.
     */
    "tab.activeBorderTop": ThemeNames;
    /**
     * Active tab foreground color in an active group. Tabs are the containers for editors in
     * the editor area. Multiple tabs can be opened in one editor group. There can be multiple
     * editor groups.
     */
    "tab.activeForeground": ThemeNames;
    /**
     * Border on the top of modified active tabs in an active group. Tabs are the containers for
     * editors in the editor area. Multiple tabs can be opened in one editor group. There can be
     * multiple editor groups.
     */
    "tab.activeModifiedBorder": ThemeNames;
    /**
     * Border to separate tabs from each other. Tabs are the containers for editors in the
     * editor area. Multiple tabs can be opened in one editor group. There can be multiple
     * editor groups.
     */
    "tab.border": ThemeNames;
    /**
     * Tab background color when hovering. Tabs are the containers for editors in the editor
     * area. Multiple tabs can be opened in one editor group. There can be multiple editor
     * groups.
     */
    "tab.hoverBackground": ThemeNames;
    /**
     * Border to highlight tabs when hovering. Tabs are the containers for editors in the editor
     * area. Multiple tabs can be opened in one editor group. There can be multiple editor
     * groups.
     */
    "tab.hoverBorder": ThemeNames;
    /**
     * Tab foreground color when hovering. Tabs are the containers for editors in the editor
     * area. Multiple tabs can be opened in one editor group. There can be multiple editor
     * groups.
     */
    "tab.hoverForeground": ThemeNames;
    /**
     * Inactive tab background color in an active group. Tabs are the containers for editors in
     * the editor area. Multiple tabs can be opened in one editor group. There can be multiple
     * editor groups.
     */
    "tab.inactiveBackground": ThemeNames;
    /**
     * Inactive tab foreground color in an active group. Tabs are the containers for editors in
     * the editor area. Multiple tabs can be opened in one editor group. There can be multiple
     * editor groups.
     */
    "tab.inactiveForeground": ThemeNames;
    /**
     * Border on the top of modified inactive tabs in an active group. Tabs are the containers
     * for editors in the editor area. Multiple tabs can be opened in one editor group. There
     * can be multiple editor groups.
     */
    "tab.inactiveModifiedBorder": ThemeNames;
    /**
     * Border to separate pinned tabs from other tabs. Tabs are the containers for editors in
     * the editor area. Multiple tabs can be opened in one editor group. There can be multiple
     * editor groups.
     */
    "tab.lastPinnedBorder": ThemeNames;
    /**
     * Active tab background color in an unfocused group. Tabs are the containers for editors in
     * the editor area. Multiple tabs can be opened in one editor group. There can be multiple
     * editor groups.
     */
    "tab.unfocusedActiveBackground": ThemeNames;
    /**
     * Border on the bottom of an active tab in an unfocused group. Tabs are the containers for
     * editors in the editor area. Multiple tabs can be opened in one editor group. There can be
     * multiple editor groups.
     */
    "tab.unfocusedActiveBorder": ThemeNames;
    /**
     * Border to the top of an active tab in an unfocused group. Tabs are the containers for
     * editors in the editor area. Multiple tabs can be opened in one editor group. There can be
     * multiple editor groups.
     */
    "tab.unfocusedActiveBorderTop": ThemeNames;
    /**
     * Active tab foreground color in an unfocused group. Tabs are the containers for editors in
     * the editor area. Multiple tabs can be opened in one editor group. There can be multiple
     * editor groups.
     */
    "tab.unfocusedActiveForeground": ThemeNames;
    /**
     * Border on the top of modified active tabs in an unfocused group. Tabs are the containers
     * for editors in the editor area. Multiple tabs can be opened in one editor group. There
     * can be multiple editor groups.
     */
    "tab.unfocusedActiveModifiedBorder": ThemeNames;
    /**
     * Tab background color in an unfocused group when hovering. Tabs are the containers for
     * editors in the editor area. Multiple tabs can be opened in one editor group. There can be
     * multiple editor groups.
     */
    "tab.unfocusedHoverBackground": ThemeNames;
    /**
     * Border to highlight tabs in an unfocused group when hovering. Tabs are the containers for
     * editors in the editor area. Multiple tabs can be opened in one editor group. There can be
     * multiple editor groups.
     */
    "tab.unfocusedHoverBorder": ThemeNames;
    /**
     * Tab foreground color in an unfocused group when hovering. Tabs are the containers for
     * editors in the editor area. Multiple tabs can be opened in one editor group. There can be
     * multiple editor groups.
     */
    "tab.unfocusedHoverForeground": ThemeNames;
    /**
     * Inactive tab background color in an unfocused group. Tabs are the containers for editors
     * in the editor area. Multiple tabs can be opened in one editor group. There can be
     * multiple editor groups.
     */
    "tab.unfocusedInactiveBackground": ThemeNames;
    /**
     * Inactive tab foreground color in an unfocused group. Tabs are the containers for editors
     * in the editor area. Multiple tabs can be opened in one editor group. There can be
     * multiple editor groups.
     */
    "tab.unfocusedInactiveForeground": ThemeNames;
    /**
     * Border on the top of modified inactive tabs in an unfocused group. Tabs are the
     * containers for editors in the editor area. Multiple tabs can be opened in one editor
     * group. There can be multiple editor groups.
     */
    "tab.unfocusedInactiveModifiedBorder": ThemeNames;
    /**
     * 'Black' ANSI color in the terminal.
     */
    "terminal.ansiBlack": ThemeNames;
    /**
     * 'Blue' ANSI color in the terminal.
     */
    "terminal.ansiBlue": ThemeNames;
    /**
     * 'BrightBlack' ANSI color in the terminal.
     */
    "terminal.ansiBrightBlack": ThemeNames;
    /**
     * 'BrightBlue' ANSI color in the terminal.
     */
    "terminal.ansiBrightBlue": ThemeNames;
    /**
     * 'BrightCyan' ANSI color in the terminal.
     */
    "terminal.ansiBrightCyan": ThemeNames;
    /**
     * 'BrightGreen' ANSI color in the terminal.
     */
    "terminal.ansiBrightGreen": ThemeNames;
    /**
     * 'BrightMagenta' ANSI color in the terminal.
     */
    "terminal.ansiBrightMagenta": ThemeNames;
    /**
     * 'BrightRed' ANSI color in the terminal.
     */
    "terminal.ansiBrightRed": ThemeNames;
    /**
     * 'BrightWhite' ANSI color in the terminal.
     */
    "terminal.ansiBrightWhite": ThemeNames;
    /**
     * 'BrightYellow' ANSI color in the terminal.
     */
    "terminal.ansiBrightYellow": ThemeNames;
    /**
     * 'Cyan' ANSI color in the terminal.
     */
    "terminal.ansiCyan": ThemeNames;
    /**
     * 'Green' ANSI color in the terminal.
     */
    "terminal.ansiGreen": ThemeNames;
    /**
     * 'Magenta' ANSI color in the terminal.
     */
    "terminal.ansiMagenta": ThemeNames;
    /**
     * 'Red' ANSI color in the terminal.
     */
    "terminal.ansiRed": ThemeNames;
    /**
     * 'White' ANSI color in the terminal.
     */
    "terminal.ansiWhite": ThemeNames;
    /**
     * 'Yellow' ANSI color in the terminal.
     */
    "terminal.ansiYellow": ThemeNames;
    /**
     * The background color of the terminal, this allows coloring the terminal differently to
     * the panel.
     */
    "terminal.background": ThemeNames;
    /**
     * The color of the border that separates split panes within the terminal. This defaults to
     * panel.border.
     */
    "terminal.border": ThemeNames;
    /**
     * Background color when dragging on top of terminals. The color should have transparency so
     * that the terminal contents can still shine through.
     */
    "terminal.dropBackground": ThemeNames;
    /**
     * Color of the current search match in the terminal. The color must not be opaque so as not
     * to hide underlying terminal content.
     */
    "terminal.findMatchBackground": ThemeNames;
    /**
     * Border color of the current search match in the terminal.
     */
    "terminal.findMatchBorder": ThemeNames;
    /**
     * Color of the other search matches in the terminal. The color must not be opaque so as not
     * to hide underlying terminal content.
     */
    "terminal.findMatchHighlightBackground": ThemeNames;
    /**
     * Border color of the other search matches in the terminal.
     */
    "terminal.findMatchHighlightBorder": ThemeNames;
    /**
     * The foreground color of the terminal.
     */
    "terminal.foreground": ThemeNames;
    /**
     * Border color of the other search matches in the terminal.
     */
    "terminal.hoverHighlightBackground": ThemeNames;
    /**
     * The selection background color of the terminal when it does not have focus.
     */
    "terminal.inactiveSelectionBackground": ThemeNames;
    /**
     * The selection background color of the terminal.
     */
    "terminal.selectionBackground": ThemeNames;
    /**
     * The selection foreground color of the terminal. When this is null the selection
     * foreground will be retained and have the minimum contrast ratio feature applied.
     */
    "terminal.selectionForeground": ThemeNames;
    /**
     * Border on the side of the terminal tab in the panel. This defaults to tab.activeBorder.
     */
    "terminal.tab.activeBorder": ThemeNames;
    /**
     * The default terminal command decoration background color.
     */
    "terminalCommandDecoration.defaultBackground": ThemeNames;
    /**
     * The terminal command decoration background color for error commands.
     */
    "terminalCommandDecoration.errorBackground": ThemeNames;
    /**
     * The terminal command decoration background color for successful commands.
     */
    "terminalCommandDecoration.successBackground": ThemeNames;
    /**
     * The background color of the terminal cursor. Allows customizing the color of a character
     * overlapped by a block cursor.
     */
    "terminalCursor.background": ThemeNames;
    /**
     * The foreground color of the terminal cursor.
     */
    "terminalCursor.foreground": ThemeNames;
    /**
     * The overview ruler cursor color.
     */
    "terminalOverviewRuler.cursorForeground": ThemeNames;
    /**
     * Overview ruler marker color for find matches in the terminal.
     */
    "terminalOverviewRuler.findMatchForeground": ThemeNames;
    /**
     * Color for the 'Errored' icon in the test explorer.
     */
    "testing.iconErrored": ThemeNames;
    /**
     * Color for the 'failed' icon in the test explorer.
     */
    "testing.iconFailed": ThemeNames;
    /**
     * Color for the 'passed' icon in the test explorer.
     */
    "testing.iconPassed": ThemeNames;
    /**
     * Color for the 'Queued' icon in the test explorer.
     */
    "testing.iconQueued": ThemeNames;
    /**
     * Color for the 'Skipped' icon in the test explorer.
     */
    "testing.iconSkipped": ThemeNames;
    /**
     * Color for the 'Unset' icon in the test explorer.
     */
    "testing.iconUnset": ThemeNames;
    /**
     * Text color of test error messages shown inline in the editor.
     */
    "testing.message.error.decorationForeground": ThemeNames;
    /**
     * Margin color beside error messages shown inline in the editor.
     */
    "testing.message.error.lineBackground": ThemeNames;
    /**
     * Text color of test info messages shown inline in the editor.
     */
    "testing.message.info.decorationForeground": ThemeNames;
    /**
     * Margin color beside info messages shown inline in the editor.
     */
    "testing.message.info.lineBackground": ThemeNames;
    /**
     * Color of the peek view borders and arrow.
     */
    "testing.peekBorder": ThemeNames;
    /**
     * Color of the peek view borders and arrow.
     */
    "testing.peekHeaderBackground": ThemeNames;
    /**
     * Color for 'run' icons in the editor.
     */
    "testing.runAction": ThemeNames;
    /**
     * Background color for block quotes in text.
     */
    "textBlockQuote.background": ThemeNames;
    /**
     * Border color for block quotes in text.
     */
    "textBlockQuote.border": ThemeNames;
    /**
     * Background color for code blocks in text.
     */
    "textCodeBlock.background": ThemeNames;
    /**
     * Foreground color for links in text when clicked on and on mouse hover.
     */
    "textLink.activeForeground": ThemeNames;
    /**
     * Foreground color for links in text.
     */
    "textLink.foreground": ThemeNames;
    /**
     * Foreground color for preformatted text segments.
     */
    "textPreformat.foreground": ThemeNames;
    /**
     * Color for text separators.
     */
    "textSeparator.foreground": ThemeNames;
    /**
     * Title bar background when the window is active.
     */
    "titleBar.activeBackground": ThemeNames;
    /**
     * Title bar foreground when the window is active.
     */
    "titleBar.activeForeground": ThemeNames;
    /**
     * Title bar border color.
     */
    "titleBar.border": ThemeNames;
    /**
     * Title bar background when the window is inactive.
     */
    "titleBar.inactiveBackground": ThemeNames;
    /**
     * Title bar foreground when the window is inactive.
     */
    "titleBar.inactiveForeground": ThemeNames;
    /**
     * Toolbar background when holding the mouse over actions
     */
    "toolbar.activeBackground": ThemeNames;
    /**
     * Toolbar background when hovering over actions using the mouse
     */
    "toolbar.hoverBackground": ThemeNames;
    /**
     * Toolbar outline when hovering over actions using the mouse
     */
    "toolbar.hoverOutline": ThemeNames;
    /**
     * Tree stroke color for the indentation guides that are not active.
     */
    "tree.inactiveIndentGuidesStroke": ThemeNames;
    /**
     * Tree stroke color for the indentation guides.
     */
    "tree.indentGuidesStroke": ThemeNames;
    /**
     * Table border color between columns.
     */
    "tree.tableColumnsBorder": ThemeNames;
    /**
     * Background color for odd table rows.
     */
    "tree.tableOddRowsBackground": ThemeNames;
    /**
     * Background color for the embedded editors on the Interactive Playground.
     */
    "walkThrough.embeddedEditorBackground": ThemeNames;
    /**
     * Foreground color of the heading of each walkthrough step
     */
    "walkthrough.stepTitle.foreground": ThemeNames;
    /**
     * Background color for the Welcome page.
     */
    "welcomePage.background": ThemeNames;
    /**
     * Foreground color for the Welcome page progress bars.
     */
    "welcomePage.progress.background": ThemeNames;
    /**
     * Background color for the Welcome page progress bars.
     */
    "welcomePage.progress.foreground": ThemeNames;
    /**
     * Background color for the tiles on the Welcome page.
     */
    "welcomePage.tileBackground": ThemeNames;
    /**
     * Border color for the tiles on the Welcome page.
     */
    "welcomePage.tileBorder": ThemeNames;
    /**
     * Hover background color for the tiles on the Welcome.
     */
    "welcomePage.tileHoverBackground": ThemeNames;
    /**
     * Border color of widgets such as find/replace inside the editor.
     */
    "widget.border": ThemeNames;
    /**
     * Shadow color of widgets such as find/replace inside the editor.
     */
    "widget.shadow": ThemeNames;
    /**
     * The color used for the border of the window when it is active. Only supported in the
     * macOS and Linux desktop client when using the custom title bar.
     */
    "window.activeBorder": ThemeNames;
    /**
     * The color used for the border of the window when it is inactive. Only supported in the
     * macOS and Linux desktop client when using the custom title bar.
     */
    "window.inactiveBorder": ThemeNames;

    "errorLens.errorBackground": ThemeNames;
    "errorLens.infoBackground": ThemeNames;
    "errorLens.warningBackground": ThemeNames;
    "errorLens.errorBackgroundLight": ThemeNames;
    "errorLens.errorForeground": ThemeNames;
    "errorLens.errorForegroundLight": ThemeNames;
    "errorLens.errorMessageBackground": ThemeNames;
    "errorLens.errorRangeBackground": ThemeNames;
    "errorLens.hintBackground": ThemeNames;
    "errorLens.hintBackgroundLight": ThemeNames;
    "errorLens.hintForeground": ThemeNames;
    "errorLens.hintForegroundLight": ThemeNames;
    "errorLens.hintMessageBackground": ThemeNames;
    "errorLens.hintRangeBackground": ThemeNames;
    "errorLens.infoBackgroundLight": ThemeNames;
    "errorLens.infoForeground": ThemeNames;
    "errorLens.infoForegroundLight": ThemeNames;
    "errorLens.infoMessageBackground": ThemeNames;
    "errorLens.infoRangeBackground": ThemeNames;
    "errorLens.statusBarErrorForeground": ThemeNames;
    "errorLens.statusBarHintForeground": ThemeNames;
    "errorLens.statusBarIconErrorForeground": ThemeNames;
    "errorLens.statusBarIconWarningForeground": ThemeNames;
    "errorLens.statusBarInfoForeground": ThemeNames;
    "errorLens.statusBarWarningForeground": ThemeNames;
    "errorLens.warningBackgroundLight": ThemeNames;
    "errorLens.warningForeground": ThemeNames;
    "errorLens.warningForegroundLight": ThemeNames;
    "errorLens.warningMessageBackground": ThemeNames;
    "errorLens.warningRangeBackground": ThemeNames;

    "issues.closed": ThemeNames;
    "issues.newIssueDecoration": ThemeNames;
    "issues.open": ThemeNames;
    "markdown.extension.editor.codeSpan.background": ThemeNames;
    "markdown.extension.editor.codeSpan.border": ThemeNames;
    "markdown.extension.editor.formattingMark.foreground": ThemeNames;
    "markdown.extension.editor.trailingSpace.background": ThemeNames;
    "pullRequests.closed": ThemeNames;
    "pullRequests.draft": ThemeNames;
    "pullRequests.merged": ThemeNames;
    "pullRequests.notification": ThemeNames;
    "pullRequests.open": ThemeNames;
}
