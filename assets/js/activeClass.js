$(document).ready(function()
		{
			var ActiveClass='ui-btn-active';
			var ID = "#listhead";
			var ActiveURL = $(location).attr('href');
			var listItems = $(ID).children();
			for (var i = 0; i < listItems.length; i++) {
				var $item = $(listItems[i]).find('a');
				var url = $item.attr('href');
				if(ActiveURL.search(url)!= -1)
				{
					$item.addClass(ActiveClass);
				}
			};
		});


