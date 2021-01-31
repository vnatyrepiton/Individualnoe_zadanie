import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends Component
{

  /* Здесь хранятся все переменные num - это число веденное в строке, а newText - это результат, который выведется */
  constructor(props){
    super(props);
    this.state={num:0, newText:"Введите номер и нажмите на кнопку Посчитать"};
  }
  
  /* Это функция которая считывает факториал */
  factorial=()=>
  {
    /* Берем переменную из констуртора выше и присваиваем ее к переменной внутри функции */
    var n = this.state.num; 
    
    /* Второй проверяем явлется ли введенное значение числом */
    if (/^\d+$/.test(n)) {
        
      /* Считываем факториал */
      if (n === 0) return 1;
      let f = 1;
      for (let i = 1; i < n; i++)
      {
        f = f * (i + 1);
      }

      /* Присваиваем резульать к newText */
      this.setState({newText: "Факториал из " + this.state.num + " равняется " + f}); 
    }
    else{
      this.setState({num:0});
      this.setState({newText: "ВВЕДИТЕ ЦЕЛОЕ ЧИСЛО"});
    }
  }

  /* Принимать только числа */
  handleInputChange = (num) => {
    if (/^\d+$/.test(num)) {
      this.setState({num: num});
    }
    else{
      this.setState({num:0});
      this.setState({newText: "ВВЕДИТЕ ЦЕЛОЕ ЧИСЛО"});
    }
  }
  
  /* Это интерфейс программы */
    render() {
      return(
        <View>

          {/* Это вверхняя надпись */}
          <Text style={{fontSize:20, paddingTop:50, paddingBottom:10, paddingHorizontal:10, backgroundColor: "#c107f0", color: "#fcfcfc"}}>Считалка факториал, Итоговая работа</Text>

          {/* Это текстовая строка, куда надо вводить число */}
          <TextInput style={{borderWidth:1, margin:30, fontSize:20}} keyboardType="numeric" placeholder="Введите число" onChangeText={this.handleInputChange} /* вызвать медот  handleInputChange() при написании, для проверки*//>

          {/* Это блок с текстом, куда будет выводиться результат */}
          <Text style={{fontSize:17, margin:10}}>{this.state.newText}</Text>

          {/* А это кнопка, при нажатии выполняется метод "factorial" */}
          <Button style={{backgroundColor: "#c107f0", color: "#fcfcfc"}} title="Посчитать" onPress={this.factorial} /* выхвать метод, который считает факториал при нажатии на кнопку *//>

        </View>
      );
    }
}
