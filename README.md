This is my own modified version of the jquery-ui themeswitcher widget, which was originally found on the jQuery UI Docs website.
Ever since jquery changed its hotlinking policies, the widget began to break.
So users started downloading it locally.
This gave me the opportunity to look at the code more closely.
Changes I decided to make:

* instead of creating the html markup for the list of jquery-ui themes with a single string, 
  I decided to construct an object that will then be iterated over in order to build the string for the ul list markup. 
  This way it is much easier to add / subtract themes from the list.
* I didn't like the loadTheme option triggering a click on the ul list and subsequently calling the onselect callback. 
  So I made a couple simple modifications to the cookie read / loadTheme option behaviour, 
  eliminating the click trigger and the onselect callback. 
  This way the onselect callback is only triggered when an actual user instantiated selection is made on the widget.

When [js-cookie](https://github.com/js-cookie/js-cookie/blob/latest/src/js.cookie.js "Javascript Cookie") is available the plugin utilizes it to save and load the most recently chosen theme.

Any other ideas for bettering this very useful plugin are welcome!

[See it live here](https://johnrdorazio.github.io/Themeswitcher/ "JohnRDOrazio Themeswitcher")

# Available Options

<div class="options tabs-container" id="toptions" style=""><b class="options">Options:</b>
<p><br>
</p><table class="options">
<tbody><tr><th>Name</th><th>Type</th><th>Default</th></tr>

<tr class="option">
<th>loadTheme</th>
<td class="type"><a href="http://types/#&lt;a href='../../Types.html#String'&gt;String&lt;/a&gt;" title="/Types"></a><a href="../../Types.html#String">String</a></td>
<td class="default"><b>Default:</b> <span>null</span></td>
</tr>
<tr><td class="desc" colspan="3">
<p>Load a theme as soon as the switcher loads. String must match the name of a theme in the switcher menu.
</p>
</td></tr>

<!--
<tr class="option">
<th>height</th>
<td class="type"><a href="http://types/#&lt;a href='../../Types.html#Number'&gt;Number&lt;/a&gt;" title="/Types"></a><a href="../../Types.html#Number">Number</a></td>
<td class="default"><b>Default:</b> <span>200</span></td>
</tr>
<tr><td class="desc" colspan="3">
<p>Sets the height of the switcher menu.
</p>
</td></tr>
-->
<!--
<tr class="option">
<th>width</th>
<td class="type"><a href="http://types/#&lt;a href='../../Types.html#Number'&gt;Number&lt;/a&gt;" title="/Types"></a><a href="../../Types.html#Number">Number</a></td>
<td class="default"><b>Default:</b> <span>150</span></td>
</tr>
<tr><td class="desc" colspan="3">
<p>Sets the width of the switcher menu.
</p>
</td></tr>
-->

<tr class="option">
<th>initialText</th>
<td class="type"><a href="http://types/#&lt;a href='../../Types.html#String'&gt;String&lt;/a&gt;" title="/Types"></a><a href="../../Types.html#String">String</a></td>
<td class="default"><b>Default:</b> <span>'Switch Theme'</span></td>
</tr>
<tr><td class="desc" colspan="3">
<p>Sets the initial text in the widget button before a theme has been chosen.
</p>
</td></tr>

<tr class="option">
<th>buttonPreText</th>
<td class="type"><a href="http://types/#&lt;a href='../../Types.html#String'&gt;String&lt;/a&gt;" title="/Types"></a><a href="../../Types.html#String">String</a></td>
<td class="default"><b>Default:</b> <span>'Theme: '</span></td>
</tr>
<tr><td class="desc" colspan="3">
<p>Sets the text in the widget button that precedes the theme name when a theme is chosen.
</p>
</td></tr>

<tr class="option">
<th>closeOnSelect</th>
<td class="type"><a href="http://types/#&lt;a href='../../Types.html#Boolean'&gt;Boolean&lt;/a&gt;" title="/Types"></a><a href="../../Types.html#Boolean">Boolean</a></td>
<td class="default"><b>Default:</b> <span>true</span></td>
</tr>
<tr><td class="desc" colspan="3">
<p>Close the switcher menu when a theme is selected.
</p>
</td></tr>
<!--
<tr class="option">
<th>buttonHeight</th>
<td class="type"><a href="http://types/#&lt;a href='../../Types.html#Number'&gt;Number&lt;/a&gt;" title="/Types"></a><a href="../../Types.html#Number">Number</a></td>
<td class="default"><b>Default:</b> <span>14</span></td>
</tr>
<tr><td class="desc" colspan="3">
<p>Height of switcher button.
</p>
</td></tr>
-->
<tr class="option">
<th>cookieName</th>
<td class="type"><a href="http://types/#&lt;a href='../../Types.html#String'&gt;String&lt;/a&gt;" title="/Types"></a><a href="../../Types.html#String">String</a></td>
<td class="default"><b>Default:</b> <span>'jquery-ui-theme'</span></td>
</tr>
<tr><td class="desc" colspan="3">
<p>The name of the cookie that the switcher will set for your domain. Once a theme has been selected, it will be remembered on future loads.
</p>
</td></tr>


<tr class="option">
<th>onOpen</th>
<td class="type"><a href="http://types/#&lt;a href='../../Types.html#Function'&gt;Function&lt;/a&gt;" title="/Types"></a><a href="../../Types.html#Function">Function</a></td>
<td class="default"><b>Default:</b> <span>null</span></td>
</tr>
<tr><td class="desc" colspan="3">
<p>Callback function to be executed whenever the switcher menu opens.
</p>
</td></tr>


<tr class="option">
<th>onClose</th>
<td class="type"><a href="http://types/#&lt;a href='../../Types.html#Function'&gt;Function&lt;/a&gt;" title="/Types"></a><a href="../../Types.html#Function">Function</a></td>
<td class="default"><b>Default:</b> <span>null</span></td>
</tr>
<tr><td class="desc" colspan="3">
<p>Callback function to be executed whenever the switcher menu closes.
</p>
</td></tr>

<tr class="option">
<th>onSelect</th>
<td class="type"><a href="http://types/#&lt;a href='../../Types.html#Function'&gt;Function&lt;/a&gt;" title="/Types"></a><a href="../../Types.html#Function">Function</a></td>
<td class="default"><b>Default:</b> <span>null</span></td>
</tr>
<tr><td class="desc" colspan="3">
<p>Callback function to be executed whenever a theme is selected.
</p>
</td></tr>
</tbody></table>
</div>
