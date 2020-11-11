import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {

  word = '';
   badWord = '';
   text = '';
   borderColor = '';
   areaholder = 'text here...';
   wordholder = 'word here...';
   wordColor = ''

  constructor() { }

  ngOnInit(): void {
  }
  addWord(){
   
    if (this.word.length > 0) {
      if (this.badWord.length == 0) {
          this.badWord += `${this.word}`;
      }
      else {
          this.badWord += `,${this.word}`;
      }

      this.word = '';
      this.wordholder = 'word here...'
      this.wordColor = 'gray'
  }
  else {
      this.word = '';
      this.wordholder = 'Please write a word !'
      this.wordColor = 'red'
  }
  }
  resetWord(){
    this.badWord = ''
  }
  clear(){
    this.text = ''
  }
  cenzor(){
    if (this.text.length > 0) {
        let arr = this.text.split(' ');
        let arr1 = this.badWord.split(',');
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr1.length; j++) {
                if (arr[i] == arr1[j]) {
                    let length = arr[i].length
                    arr[i] = ''
                    for (let k = 0; k < length; k++) {
                        arr[i] += '*'
                    }
                }
                else {
                    arr[i] = arr[i]
                }
            }
        }
        
        this.text = '';
        arr.forEach(element => {
            this.text += `${element} `
        });
        
        this.areaholder = 'text here...'
        this.borderColor = 'gray'
    }
    else {
        this.text = '';
        this.areaholder = 'Please write a word!'
        this.borderColor = 'red'
    }
  }
}
