console.log('apidaeChromeTools/metadonnees.js') ;

jQuery('table.recherche-gestion thead tr').each(function(){
	jQuery(this).append('<th class="fiche edit"></th>') ;
}) ;

jQuery('table.recherche-gestion tbody tr').each(function(){
	var td_edit = jQuery(this).find('td.edit') ;
	jQuery(this).append('<td class="fiche edit"><a class="btn btn-primary btn-mini btn-icon-only btn-primary metadonnees" href="#"><span class="fa fa-fw fa-file-code-o"></span></a></td>') ;
}) ;

jQuery('body.recherche-intuitive.page-fiche-objet-touristique').find('.action-container').each(function(){
	var id = jQuery('div[data-gmap-reference-id]').data('gmap-reference-id') ;
	var btn = '<a class="menu-link menu-link-large" target="_blank" href="http://apidae.allier-auvergne-tourisme.com/metadonnees/form.php?id='+id+'">' ;
		btn += '<span class="fa fa-lg fa-file-code-o"></span>' ;
	btn += '</a>' ;
	jQuery(this).append(btn) ;
}) ;

jQuery('body.fiche-consultation').find('.action-container').each(function(){
	var id = jQuery('.label-mes-objets').text() ;
	var btn = '<a class="menu-link menu-link-large" target="_blank" href="http://apidae.allier-auvergne-tourisme.com/metadonnees/form.php?id='+id+'">' ;
		btn += '<span class="fa fa-lg fa-file-code-o"></span>' ;
	btn += '</a>' ;
	jQuery(this).append(btn) ;
}) ;

jQuery(document).on('click','a.btn.metadonnees',function(){
	var id = jQuery(this).closest('tr').data('itemselector-itemid') ;
	var h1 = jQuery(this).closest('tr').find('td.nom a').first().text() ;
	var url_iframe = 'http://apidae.allier-auvergne-tourisme.com/metadonnees/form.php?id='+id ; //'&h1='+encodeURI(h1) ;
	jQuery(this).attr('href',url_iframe) ;
	jQuery(this).attr('target','_blank') ;
	jQuery(this).trigger('click') ;
	/*
	var iframe = jQuery(this).closest('td').find('iframe') ;
	if ( iframe.length == 0 )
	{
		iframe = jQuery('<iframe style="height:200px;width:200px;"></iframe>') ;
		jQuery(this).closest('td').append(iframe) ;
	}
	iframe.attr('src',url_iframe) ;
	*/
	//window.open(url_iframe) ;
}) ;