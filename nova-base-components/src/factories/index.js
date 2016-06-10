import { Factory } from 'rosie'

// ------------------------------------- //
// Core
// ------------------------------------- //

Factory.define('user').attrs({
  _id: 0,
  username: 'user',
})

Factory.define('user1')
  .extend('user')
  .attrs({ _id: 1, username: 'user1' })

Factory.define('user2')
  .extend('user')
  .attrs({ _id: 2, username: 'user2' })

Factory.define('comment').attrs({
  postId: 1,
  userId: 0, // FIXME: chained from user()
  body: 'commentBody',
  htmlBody: 'commentHtmlBody',
  user: () => Factory.build('user'),
})

// ------------------------------------- //
// Components
// ------------------------------------- //

Factory.define('comments-item-props').attrs({
  comment: () => Factory.build('comment'),
  currentUser: () => Factory.build('user2'),
})

Factory.define('comments-item-deleted-props')
  .extend('comments-item-props')
  .attrs({ comment: () => Factory.build('comment', { isDeleted: true }) })

Factory.define('comments-item-owner-props')
  .extend('comments-item-props')
  .attrs({ currentUser: () => Factory.build('user') })

export default Factory
