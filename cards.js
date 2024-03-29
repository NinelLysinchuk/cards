

 let aFlashcards = [
		 { 'srcQ': 'a.jpg' ,  'srcA': 'a2.jpg'},
		 { 'srcQ': 'i.jpg' ,  'srcA': 'i2.jpg'},
		 { 'srcQ': 'e.jpg' ,  'srcA': 'e2.jpg'},
		 { 'srcQ': 'o.jpg' ,  'srcA': 'o2.jpg'},
		 { 'srcQ': 'u.jpg' ,  'srcA': 'u2.jpg'},
		 
		 { 'srcQ': 'ka.jpg', 'srcA': 'ka2.jpg'},
		 { 'srcQ': 'ki.jpg', 'srcA': 'ki2.jpg'},
		 { 'srcQ': 'ke.jpg', 'srcA': 'ke2.jpg'},
		 { 'srcQ': 'ko.jpg', 'srcA': 'ko2.jpg'},
		 { 'srcQ': 'ku.jpg', 'srcA': 'ku2.jpg'}, 
		 
		 { 'srcQ': 'sa.jpg', 'srcA': 'sa2.jpg'}, 
		 { 'srcQ': 'shi.jpg', 'srcA': 'shi2.jpg'}, 
		 { 'srcQ': 'su.jpg', 'srcA': 'su2.jpg'}, 
		 { 'srcQ': 'se.jpg', 'srcA': 'se2.jpg'}, 
		 { 'srcQ': 'so.jpg', 'srcA': 'so2.jpg'}, 
		 
		 { 'srcQ': 'ta.jpg', 'srcA': 'ta2.jpg'}, 
		 { 'srcQ': 'chi.jpg', 'srcA': 'chi2.jpg'}, 
		 { 'srcQ': 'tsu.jpg', 'srcA': 'tsu2.jpg'}, 
		 { 'srcQ': 'te.jpg', 'srcA': 'te2.jpg'}, 
		 { 'srcQ': 'to.jpg', 'srcA': 'to2.jpg'},
		 
		 { 'srcQ': 'na.jpg', 'srcA': 'na2.jpg'}, 
		 { 'srcQ': 'ni.jpg', 'srcA': 'ni2.jpg'}, 
		 { 'srcQ': 'nu.jpg', 'srcA': 'nu2.jpg'}, 
		 { 'srcQ': 'ne.jpg', 'srcA': 'ne2.jpg'}, 
		 { 'srcQ': 'no.jpg', 'srcA': 'no2.jpg'}, 
		 
		 { 'srcQ': 'ha.jpg', 'srcA': 'ha2.jpg'}, 
		 { 'srcQ': 'hi.jpg', 'srcA': 'hi2.jpg'}, 
		 { 'srcQ': 'fu.jpg', 'srcA': 'fu2.jpg'}, 
		 { 'srcQ': 'he.jpg', 'srcA': 'he2.jpg'}, 
		 { 'srcQ': 'ho.jpg', 'srcA': 'ho2.jpg'}, 
		 
		 { 'srcQ': 'ma.jpg', 'srcA': 'ma2.jpg'}, 
		 { 'srcQ': 'mi.jpg', 'srcA': 'mi2.jpg'}, 
		 { 'srcQ': 'mu.jpg', 'srcA': 'mu2.jpg'}, 
		 { 'srcQ': 'me.jpg', 'srcA': 'me2.jpg'}, 
		 { 'srcQ': 'mo.jpg', 'srcA': 'mo2.jpg'}, 
		 
		 { 'srcQ': 'ra.jpg', 'srcA': 'ra2.jpg'}, 
		 { 'srcQ': 'ri.jpg', 'srcA': 'ri2.jpg'}, 
		 { 'srcQ': 'ru.jpg', 'srcA': 'ru2.jpg'}, 
		 { 'srcQ': 're.jpg', 'srcA': 're2.jpg'}, 
		 { 'srcQ': 'ro.jpg', 'srcA': 'ro2.jpg'}, 
		 
		 { 'srcQ': 'ya.jpg', 'srcA': 'ya2.jpg'}, 
		 { 'srcQ': 'yu.jpg', 'srcA': 'yu2.jpg'}, 
		 { 'srcQ': 'yo.jpg', 'srcA': 'yo2.jpg'}, 
		 { 'srcQ': 'wa.jpg', 'srcA': 'wa2.jpg'}, 
		 { 'srcQ': 'wo.jpg', 'srcA': 'wo2.jpg'}, 
		 { 'srcQ': 'n.jpg', 'srcA': 'n2.jpg'}, 
		
	];
	
class FlashCards{
	constructor(){	
		this.eContainerMain    = document.querySelector( '.containerMain' );
		this.eCreateBtn 	   = document.querySelector( '.containerMain__create' );
		this.eRandomBtn 	   = document.querySelector( '.containerMain__random' );
		this.cards__cardTpl    = document.querySelector( '.cards__card.tpl' );
		this.eCards		       = this.cards__cardTpl.parentNode;
		this.iSelectedCardsQty = 0;
		
		this.showCards(aFlashcards); 
			
		this.createEvents();
		}	

	flipCard(event){
		event.target.closest('.card').classList.toggle('reverse');
		// event.currentTarget = cards__card
		}

	random(m, n){
		return Math.floor(
			Math.random() * (n - m + 1)
			) + m;
		}
		
	showCards(aFlashcards){
			
		aFlashcards.forEach( (oFlashcardItem , iNumber) => {
			 console.log(oFlashcardItem, iNumber);
			 
			 let eNewCard = this.eCards.appendChild( this.cards__cardTpl.cloneNode(true) ),
				 eNewQuestion = eNewCard.querySelector  ('.card__hieroglyph'),
				 eNewAnswer =   eNewCard.querySelector  ('.card__transcription'),
				 eCheckbox =   eNewCard.querySelector   ('.card__checkbox')
				 ;
			 eNewQuestion.src = oFlashcardItem.srcQ; 
			 eNewAnswer.src   = oFlashcardItem.srcA;
			 
			 
			 eCheckbox.setAttribute('data-id' , iNumber)
			
			 eNewCard.classList.remove('tpl');

			
			eNewCard.querySelector('.card__images').addEventListener('click', this.flipCard.bind(this));
			});
		}
		
	showSelectedCards(){
		let aSelectedCards = Array.from(document.querySelectorAll('.card__checkbox:checked')).map(e=>aFlashcards[e.dataset.id]) //сделать выборку отмеченных карточек(на стр), а затем выборку их данных из маcсива(aFlashcards)
			;
		this.iSelectedCardsQty = aSelectedCards.length
		document.querySelectorAll( '.cards__card:not(.tpl)' ).forEach((elem)=> elem.remove()); // удалить полный набор карточек
	 
		this.showCards(aSelectedCards);
		
		this.eContainerMain.classList.add('containerMain_userList'); 		//1) добавить модификатор containerMain_userList
		this.showRandomCard(); 												//2) скрыть все карточки, оставить одну
		}
		
	showRandomCard(){
		let eShownCard = document.querySelector( '.cards__card_shown' ); //доступаемся к предыдущей выбранной карточке. Если ее нет - тогда значение будет null
		if (eShownCard){ eShownCard.classList.remove('cards__card_shown');} //скрываем показанную карточку
		document.querySelectorAll( '.cards__card:not(.tpl)' )[this.random(0, this.iSelectedCardsQty - 1)].classList.add('cards__card_shown');
		
		}
		
	createEvents(){
		this.eCreateBtn.addEventListener('click', this.showSelectedCards.bind(this))
		this.eRandomBtn.addEventListener('click', this.showRandomCard.bind(this)) 			
			
		
		}	
		
		
	}	

	
		
		
		
		   
	

	
	
	
  



















/* class Person {
		
	constructor(){
		this.name 		= '';
		this.surname 	= '';
		this.birthyear 	= 0;
		
	}
	
	greet(){
		alert('Hello, ' + this.name + ' ' + this.surname);
	}
}


let myFriend1 = new Person();
// let myFlashcard = new Flashcard(oFlashcard);

myFriend1.name = 'John';
myFriend1.surname = 'Doe';
myFriend1.birthyear = 1987;
 */




