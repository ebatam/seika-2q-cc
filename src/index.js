// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper-1', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });

  	const swiperTitle = document.getElementById('swiper-title');
  	const titleText = 'スライド'+ swiper.realIndex +'を表示しています。';
	let titleElement = document.createTextNode(titleText);
	swiperTitle.appendChild(titleElement);


  	//
	// 1つ目のスワイパー
	//////////////////////
	swiper.on('slideChange', function () {
		console.log('slide changed');
		console.log(swiper.realIndex);


		// let swiperTitle = document.getElementById('swiper-title');

		if(titleElement){
			titleElement.remove();
		}
		
		const titleText = 'スライド'+ swiper.realIndex +'を表示しています。';
		titleElement = document.createTextNode(titleText);
		swiperTitle.appendChild(titleElement);
		
		// let swiperTitle = document.getElementById('swiper-title');
		// let title = document.createTextNode('スライド'+ swiper.realIndex +'を表示しています。');
		// swiperTitle.appendChild(title);
		
  	});

  const swiper2 = new Swiper('.swiper-2', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });

  	const titleList = [
		'メガネが光る人のイラスト（女性）',
		'口を隠して笑う人のイラスト（男性）',
		'へめへめくこひのイラスト',
		'豆鉄砲を食った鳩のイラスト',	
	];

  	const swiperTitle2 = document.getElementById('swiper-title-2');
  	const titleText2 = titleList[swiper.realIndex];
	let titleElement2 = document.createTextNode(titleText2);
	swiperTitle2.appendChild(titleElement2);


  	//
	// 2つ目のスワイパー
	//////////////////////
	swiper2.on('slideChange', function () {
		console.log('slide changed');

		if(titleElement2){
			titleElement2.remove();
		}
		
		const titleText = titleList[swiper2.realIndex];
		titleElement2 = document.createTextNode(titleText);
		swiperTitle2.appendChild(titleElement2);
	
		
  	});
  
	
 










import JustValidate from 'just-validate';



const validator = new JustValidate('#basic_form');

validator
	.addField('#basic_name', [
    {
    	rule: 'required',
		errorMessage: '必須入力項目です。',
    },
    {
    	rule: 'minLength',
    	value: 3,
		errorMessage: '3文字以上入力してください。',
    },
    {
    	rule: 'maxLength',
    	value: 15,
		errorMessage: '15文字以下で入力してください。',
    },
	])
	.addField('#basic_email', [
    {
    	rule: 'required',
		errorMessage: '必須入力項目です。',
    },
    {
    	rule: 'required',
    },
    {
      	rule: 'email',
		errorMessage: '形式が正しくありません。',
    },
  	])
 	 .addField('#basic_password', [
    {
  	    rule: 'required',
		errorMessage: '必須入力項目です。',
    },
    {
      	rule: 'password',
		errorMessage: 'パスワードは8文字以上で入力してください。その際に数字を1文字以上含める必要があります。',
    },
 	])
  	.addField('#basic_age', [
    {
      	rule: 'required',
		errorMessage: '必須入力項目です。',
    },
    {
      	rule: 'number',
		errorMessage: '数字で入力してください。',
    },
    {
      	rule: 'minNumber',
      	value: 18,
		errorMessage: '18以上の数字を入力してください。',
    },
    {
      	rule: 'maxNumber',
      	value: 150,
		errorMessage: '150以下の数字を入力してください。',
    },
  	])
  	.addField('#basic_address', [
    {
      	rule: 'required',
		  errorMessage: '必須入力項目です。',
    },
  	])
	.onSuccess(onSuccess);

	function onSuccess(event) {
		let formData = new FormData(event.target);
		console.log(formData.get("name"));
		console.log(formData.get("email"));
		console.log(formData.get("password"));
		console.log(formData.get("age"));
		console.log(formData.get("address"));
	}