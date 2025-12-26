from django import forms
from .models import Category


class PostsForm(forms.Form):
    title = forms.CharField(
        max_length=150,
        label='Название',
        widget=forms.TextInput(attrs={
            'class': 'form-control'
        })
    )

    slug = forms.SlugField(
        max_length=150,
        label='URL',
        widget=forms.TextInput(attrs={
            'class': 'form-control'
        })
    )

    content = forms.CharField(
        label='Текст',
        required=False,
        widget=forms.Textarea(attrs={
            'class': 'form-control',
            'rows': 5
        })
    )

    category = forms.ModelChoiceField(
        queryset=Category.objects.all(),
        empty_label='Выберите категорию',
        label='Категория',
        widget=forms.Select(attrs={
            'class': 'form-control'
        })
    )
