#!/usr/bin/env python
# coding: utf-8

# import pandas and plotly libraries 
import pandas as pd
import plotly.express as px


# creating variable URL
url = 'http://api.open-notify.org/iss-now.json'


# creating pandas dataframe
df = pd.read_json(url)


# viewing the created dataframe
df


# modifying the dataframe to make it easier to read 
df['latitude'] = df.loc['latitude','iss_position']
df['longitude']= df.loc['longitude','iss_position']
df.reset_index(inplace=True)


# viewing the modidfied dataframe
df


# drop unecessary column
df = df.drop(['index'], axis=1)


# viewing the dataframe
df


# Plotting location of ISS on the map
fig = px.scatter_geo(df,lat='latitude',
                    lon='longitude')
fig.show()


# The location of the ISS is displayed after a few seconds




