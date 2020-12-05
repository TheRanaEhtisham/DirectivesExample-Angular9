import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1583138994382-c7e197a71318?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Yoga',
      url: 'https://images.unsplash.com/photo-1588040217484-7d484d97dbe4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Beautiful beach',
      url: 'https://images.unsplash.com/photo-1533655887618-b3c0c95acc16?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Nature',
      url: 'https://images.unsplash.com/photo-1565113218386-934429f84cc2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmFrZWQlMjBiZWFjaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1583138994382-c7e197a71318?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Yoga',
      url: 'https://images.unsplash.com/photo-1588040217484-7d484d97dbe4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Beautiful beach',
      url: 'https://images.unsplash.com/photo-1533655887618-b3c0c95acc16?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Nature',
      url: 'https://images.unsplash.com/photo-1565113218386-934429f84cc2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmFrZWQlMjBiZWFjaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1583138994382-c7e197a71318?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Yoga',
      url: 'https://images.unsplash.com/photo-1588040217484-7d484d97dbe4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Beautiful beach',
      url: 'https://images.unsplash.com/photo-1533655887618-b3c0c95acc16?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Nature',
      url: 'https://images.unsplash.com/photo-1565113218386-934429f84cc2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmFrZWQlMjBiZWFjaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1583138994382-c7e197a71318?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Yoga',
      url: 'https://images.unsplash.com/photo-1588040217484-7d484d97dbe4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Beautiful beach',
      url: 'https://images.unsplash.com/photo-1533655887618-b3c0c95acc16?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Nature',
      url: 'https://images.unsplash.com/photo-1565113218386-934429f84cc2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmFrZWQlMjBiZWFjaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1583138994382-c7e197a71318?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Yoga',
      url: 'https://images.unsplash.com/photo-1588040217484-7d484d97dbe4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Beautiful beach',
      url: 'https://images.unsplash.com/photo-1533655887618-b3c0c95acc16?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Nature',
      url: 'https://images.unsplash.com/photo-1565113218386-934429f84cc2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmFrZWQlMjBiZWFjaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1583138994382-c7e197a71318?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Yoga',
      url: 'https://images.unsplash.com/photo-1588040217484-7d484d97dbe4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Beautiful beach',
      url: 'https://images.unsplash.com/photo-1533655887618-b3c0c95acc16?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Nature',
      url: 'https://images.unsplash.com/photo-1565113218386-934429f84cc2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmFrZWQlMjBiZWFjaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1583138994382-c7e197a71318?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Yoga',
      url: 'https://images.unsplash.com/photo-1588040217484-7d484d97dbe4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Beautiful beach',
      url: 'https://images.unsplash.com/photo-1533655887618-b3c0c95acc16?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Nature',
      url: 'https://images.unsplash.com/photo-1565113218386-934429f84cc2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmFrZWQlMjBiZWFjaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1583138994382-c7e197a71318?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Yoga',
      url: 'https://images.unsplash.com/photo-1588040217484-7d484d97dbe4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Beautiful beach',
      url: 'https://images.unsplash.com/photo-1533655887618-b3c0c95acc16?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5ha2VkJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Nature',
      url: 'https://images.unsplash.com/photo-1565113218386-934429f84cc2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmFrZWQlMjBiZWFjaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
  ]

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
