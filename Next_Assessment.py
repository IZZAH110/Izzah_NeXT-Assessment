#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import plotly.express as px


# In[2]:


url = 'http://api.open-notify.org/iss-now.json'


# In[3]:


df = pd.read_json(url)


# In[4]:


df


# In[5]:


df['latitude'] = df.loc['latitude','iss_position']
df['longitude']= df.loc['longitude','iss_position']
df.reset_index(inplace=True)


# In[6]:


df


# In[7]:


df = df.drop(['index'], axis=1)


# In[8]:


df


# In[9]:


fig = px.scatter_geo(df,lat='latitude',
                    lon='longitude')
fig.show()


# In[ ]:




