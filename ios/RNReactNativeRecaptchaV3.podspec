
Pod::Spec.new do |s|
  s.name         = "RNReactNativeRecaptchaV3"
  s.version      = "1.0.0"
  s.summary      = "RNReactNativeRecaptchaV3"
  s.description  = <<-DESC
                  RNReactNativeRecaptchaV3
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNReactNativeRecaptchaV3.git", :tag => "master" }
  s.source_files  = "RNReactNativeRecaptchaV3/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  