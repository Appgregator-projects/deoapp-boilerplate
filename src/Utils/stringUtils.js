
// ini untuk membuat apabila tulisan kepanjangan mau di buka tutup bisa menggunakan read more ini / menggunakan chakra numofline
export function readMore (val) {
    if(!val) return ''
    val = val.replace(/\s{2,}/g, ' ')
    const strLength = val.length
    if(strLength > 18) {{
      val = val.slice(0,18) + '...'}
  
    }
    return val.toLowerCase()
      .replace(/\w/, firstLetter => firstLetter.toUpperCase())
  }


  // format rifqy-yusuf-12 menjadi Rifqy Yusuf 12
  export function formatCategoryName(category) {
    if (category) {
      return category.split('-').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    } else {
      return '';
    }
  }
  