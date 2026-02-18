(use-modules
 (bitspook packages fireword)
 (guix packages)
 (guix gexp))

(package
 (inherit fireword)
 (version "0.1.0-dev")
 (source (local-file "fireword")))
