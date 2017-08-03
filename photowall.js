

	function shuffle(array) {
	  var m = array.length, t, i;

	  // While there remain elements to shuffle…
	  while (m) {

		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	  }

	  return array;
	}

	    var id_count = 0;

	jQuery(document).ready(function ($) {
    var $all = $(".hashphototwall_pic").removeClass("selected");

	loadingpage();
	 setlayout($('.hashphototwall_cont').attr('id'));
	setInterval(function () {
			zoom();
		},10000);
	setTimeout(function() {
		setInterval(function () {
		$("#hashphototwall_overlay").css('background-color', 'rgba(18,55,73, 0)');
		$('.hashphototwall_bigimg').fadeOut();
		$('.hashphototwall_user').fadeOut();
		$('.hashphototwall_like').fadeOut();
		$('.hashphototwall_description').fadeOut();
		},10000);
     
     }, 7000);

});
	function zoom() {
    var like;
    var $all = jQuery(".hashphototwall_pic").removeClass("selected");
    var id = jQuery($all[id_count])[0].id;
    id_count++;

    if (id_count == $all.length) {
        loadingpage();
        id_count = 0;
    }
    var description = jQuery('#' + id).find('.photodescription').val();
    var user = jQuery('#' + id).find('.user').val();
    var insta_link = jQuery('#' + id).find('.insta_link').val();
    var img = jQuery('#' + id).find('.photolink').val();
    var imgid = jQuery('#' + id).find('.imgid').val();
    jQuery('#hashphototwall_bigphoto').html('<div class="hashphototwall_imgcontain"><a href="' + insta_link + '"><img class="hashphototwall_bigimg" src="' + img + '"></a><div class="hashphototwall_user"> ' + user + '</div><div class="hashphototwall_like"></div><div class="hashphototwall_description" style="  word-wrap: break-word;">' + description + '</div><div class="hashphototwall_comment"></div>');
    if (description.length > 155)
        jQuery('.hashphototwall_description').text(description.substring(0, 150) + '.....');
    if (user.length > 30)
        jQuery('.hashphototwall_user').text(user.substring(0, 25) + '.....');

    jQuery('.hashphototwall_bigimg').animate({
        height: "600px"
    }, 'slow');
    setTimeout(function() {
        jQuery("#hashphototwall_overlay").css('background-color', 'rgba(18,55,73, 0.6)')
    }, 200);
    getlike(id);
    getcomment(imgid);
    
}






function getlike(id) {
    jQuery.ajax({
        type: 'POST',
        url: 'http://hk.allua.co/admin/like.php',

        data: {
            id: id
        },
        success: function(data) {

            like = data + ' Likes';
            jQuery(".hashphototwall_like").html(like);

        }
    });

}

	function getcomment(imgid){
	var photoid = imgid;
		 jQuery.ajax({
          type: 'POST',
          url: 'http://hk.allua.co/admin/getcomment.php',
		 
          data: {
              imgid: photoid
          },
          success: function(data) {
		  data = jQuery.parseJSON(data);
		  
			for (var i = 0 ; i < data.length; i++){
				var j = 0;
				if (i < 3 ){
				jQuery('.hashphototwall_comment').append('<div class="photo_comm"><div class="cm_propic"><img src="'+ data[i].propic +'"></div><div class="cm_user">' + data[i].user +'</div><div class="cm_text">'+ data[i].text +'</div></div>');
				 if(data[i].text.length > 65)
				jQuery('.cm_text').text(data[i].text.substring(0,60) + '.....');
				}else{
					if (j == 0){
					jQuery('.hashphototwall_comment').append('MORE....');
					 j++;
					}
				}
			}
          }
      });
	}
function setlayout(key) {

    jQuery.ajax({
        type: "POST",
        url: 'http://hk.allua.co/admin/getlayout.php',
        data: {
            lic_key: key
        },
        success: function(data) {
            jQuery('.hashphototwall_title_tag').html(data[0]['titlebar']);
        }
    })
}

function shuffle(array) {
    var m = array.length,
        t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}
