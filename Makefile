OUTPUT = just_tweet_bot.zip

$(OUTPUT) :
	cd src && zip -r9q ../$@ .

.PHONY: $(OUTPUT)
