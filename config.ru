$stdout.sync = true

use Rack::Static,
  :urls => ["/css", "/js", "/img", "/spec","/services/rubyonrails.html","/services/php.html","/services/mobile.html","/services/digital.html","/services/lrfid.html","/services/embedded.html","/about/about.html","/blog/ror-article.html","/blog/embedded-article.html","/blog/ba-analytics.html","/contact.html","/services/devops.html"],
  :root => "."

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('index.html', File::RDONLY)
  ]
}

