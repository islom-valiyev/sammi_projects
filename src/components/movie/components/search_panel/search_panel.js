import { Component } from 'react' 
import './search_panel.css' 
// SearchPanel nomli yangi komponent yaratiladi, bu Component klassidan extends qilinadi
class SearchPanel extends Component {
  // Komponentning holatini boshlash uchun constructor funksiyasi
  constructor(props) {
    super(props)
    // Komponentning boshlang'ich holatini tekshirishda foydalaniladigan 'term' nomli bo'sh satr qiymatini o'z ichiga olgan obyekt sifatida o'rnating
    this.state = {
      term: '',
    }
  }

  // Input maydoni qiymati o'zgartirilganda chaqiriladigan funksiya
  UpdateTermHandler = e => {
    // Input maydonining qiymatini olish
    const term = e.target.value
    // Komponentning holatini yangilab, yangi qiymatni qo'shish
    this.setState({term})
    // Ota komponentning UpdateTermHandler funksiyasini chaqirib, yangi qiymatni o'z ichiga oladi
    this.props.UpdateTermHandler(term)
  }

  // Komponentning HTML kodini yaratish uchun render funksiyasi
  render() {
    return(
      // Xususiy klass nomi va placeholder matni bilan input maydoni yaratiladi. Qiymati komponentning 'term' holatining joriy qiymati bo'ladi va qiymati o'zgartirilganda UpdateTermHandler funksiyasi chaqiriladi
      <input type="text" className="form-control search-input" placeholder="kinolarni qidirish" onChange={this.UpdateTermHandler} value={this.state.term}/>
    )
  }
}

// SearchPanel komponentini ushbu modulning standart eksporti sifatida eksport qilingan
export default SearchPanel